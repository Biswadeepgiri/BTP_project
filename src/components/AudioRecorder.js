import { useReactMediaRecorder } from "react-media-recorder";
import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios to make HTTP requests

const AudioRecorder = (props) => {
    const [second, setSecond] = useState("00");
    const [minute, setMinute] = useState("00");
    const [isActive, setIsActive] = useState(false);
    const [counter, setCounter] = useState(0);
    const [mediaBlob, setMediaBlob] = useState(null); // State to store the audio Blob

    useEffect(() => {
        let intervalId;
        if (isActive) {
            intervalId = setInterval(() => {
                const secondCounter = counter % 60;
                const minuteCounter = Math.floor(counter / 60);

                setSecond(secondCounter < 10 ? `0${secondCounter}` : secondCounter);
                setMinute(minuteCounter < 10 ? `0${minuteCounter}` : minuteCounter);

                setCounter((prevCounter) => prevCounter + 1);
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [isActive, counter]);

    function stopTimer() {
        setIsActive(false);
        setCounter(0);
        setSecond("00");
        setMinute("00");
    }

    const {
        status,
        startRecording,
        stopRecording,
        pauseRecording,
        mediaBlobUrl
    } = useReactMediaRecorder({
        video: false,
        audio: true,
        echoCancellation: true
    });

    // Convert mediaBlobUrl to a Blob and store it in state
    useEffect(() => {
        const fetchBlob = async () => {
            if (mediaBlobUrl) {
                const response = await fetch(mediaBlobUrl);
                const blob = await response.blob();
                setMediaBlob(blob); // Save blob to state
            }
        };
        fetchBlob();
    }, [mediaBlobUrl]);

    // Function to submit the audio blob to the server
    const submitRecording = async () => {
        if (mediaBlob) {
            const formData = new FormData();
            formData.append("file", mediaBlob, "recording.mp3");

            try {
                const response = await axios.post("YOUR_API_ENDPOINT", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });
                console.log("Upload successful:", response.data);
            } catch (error) {
                console.error("Error uploading audio:", error);
            }
        }
    };

    return (
        <div className="border border-black bg-black max-w-lg mx-auto p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="border border-[#bd9f61] h-[70px] bg-gradient-to-r from-yellow-500 to-orange-400 flex items-center justify-between px-4 rounded-t-lg">
                <h4 className="capitalize font-sans text-lg sm:text-xl text-white">
                    {status}
                </h4>
            </div>

            <div className="h-[200px] flex items-center justify-center bg-gray-800 rounded-md my-4 shadow-md">
                <audio src={mediaBlobUrl} controls loop className="w-full h-full rounded-md" />
            </div>

            <div className="flex flex-col items-center bg-gray-900 text-white p-4 rounded-lg shadow-md">
                <button
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition-colors duration-200 mb-4 w-1/2 sm:w-1/3"
                    onClick={stopTimer}
                >
                    Clear
                </button>

                <div className="text-3xl sm:text-5xl flex items-center justify-center space-x-1 mb-4">
                    <span className="minute">{minute}</span>
                    <span>:</span>
                    <span className="second">{second}</span>
                </div>

                <div className="flex flex-col items-center text-center">
                    <h3 className="text-lg font-normal mb-2 text-yellow-300">
                        Press Start to begin recording
                    </h3>
                    <div className="flex space-x-4">
                        <button
                            className="px-6 py-3 bg-green-500 text-white font-bold rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-green-600 focus:ring focus:ring-green-300"
                            onClick={() => {
                                if (!isActive) {
                                    startRecording();
                                } else {
                                    pauseRecording();
                                }
                                setIsActive(!isActive);
                            }}
                        >
                            {isActive ? "Pause" : "Start"}
                        </button>
                        <button
                            className="px-6 py-3 bg-red-500 text-white font-bold rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-red-600 focus:ring focus:ring-red-300"
                            onClick={() => {
                                stopRecording();
                                pauseRecording();
                                submitRecording(); // Submit the recording after stopping
                            }}
                        >
                            Stop & Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AudioRecorder;
