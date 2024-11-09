import { useReactMediaRecorder } from "react-media-recorder";
import React, { useEffect, useState } from "react";



// function isWavFile(wavFilename) {
//     const ext = path.extname(wavFilename);
//     return ext === ".wav";
// }

// function ismp3File(mp3Filename) {
//     const ext = path.extname(mp3Filename);
//     return ext === '.mp3';
// }


// function convertWavToMp3(wavFilename) {
//     return new Promise((resolve, reject) => {
//         if (!isWavFile(wavFilename)) {
//             throw new Error('Not a wav file');
//         }
//         const outputFile = wavFilename.replace(".wav", ".mp3");
//         ffmpeg({
//             source: wavFilename,
//         }).on("error", (err) => {
//             reject(err);
//         }).on("end", () => {
//             resolve(outputFile);
//         }).save(outputFile);
//     });
// }





const AudioRecorder = (props) => {
    const [second, setSecond] = useState("00");
    const [minute, setMinute] = useState("00");
    const [isActive, setIsActive] = useState(false);
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        let intervalId;

        if (isActive) {
            intervalId = setInterval(() => {
                const secondCounter = counter % 60;
                const minuteCounter = Math.floor(counter / 60);

                let computedSecond =
                    String(secondCounter).length === 1
                        ? `0${secondCounter}`
                        : secondCounter;
                let computedMinute =
                    String(minuteCounter).length === 1
                        ? `0${minuteCounter}`
                        : minuteCounter;

                setSecond(computedSecond);
                setMinute(computedMinute);

                setCounter((counter) => counter + 1);
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

    // if (isWavFile(mediaBlobUrl)) {
    //     console.log("This is a wav file");
    //     console.log(mediaBlobUrl);
    // }

    // convertWavToMp3(mediaBlobUrl);

    // if (ismp3File(mediaBlobUrl)) {
    //     console.log("This is a mp3 file");
    //     console.log(mediaBlobUrl);
    // }

    console.log("url", mediaBlobUrl);


    return (
        <div className="border border-black bg-black max-w-lg mx-auto p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="border border-[#bd9f61] h-[70px] bg-gradient-to-r from-yellow-500 to-orange-400 flex items-center justify-between px-4 rounded-t-lg">
                <h4 className="capitalize font-sans text-lg sm:text-xl text-white">
                    {status}
                </h4>
            </div>

            <div className="h-[200px] flex items-center justify-center bg-gray-800 rounded-md my-4 shadow-md">
                <video src={mediaBlobUrl} controls loop className="w-full h-full rounded-md" />
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
                            }}
                        >
                            Stop
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );


};
export default AudioRecorder;
