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
        <div className="border border-black bg-black w-[700px] h-[350px]">
            <div className="border border-[#bd9f61] h-[70px] bg-[#bd9f61] flex items-center">
                <h4 className="ml-2 capitalize font-sans text-lg text-white">
                    {status}
                </h4>
            </div>
            <div className="h-[38px]">
                <video src={mediaBlobUrl} controls loop className="w-full h-full" />
            </div>

            <div className="col-md-6 col-md-offset-3 bg-black text-white ml-[357px]">
                <button
                    className="bg-black rounded-lg text-white"
                    onClick={stopTimer}
                >
                    Clear
                </button>
                <div className="ml-16 text-6xl flex items-center">
                    <span className="minute">{minute}</span>
                    <span>:</span>
                    <span className="second">{second}</span>
                </div>

                <div className="ml-5 flex items-center">
                    <label className="text-sm font-normal" htmlFor="icon-button-file">
                        <h3 className="ml-4 font-normal">
                            Press the Start to record
                        </h3>
                        <div>
                            <button
                                className="px-8 py-3 ml-4 text-lg cursor-pointer rounded-md font-bold bg-[#42b72a] text-white transition-transform transform hover:scale-105"
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
                                className="px-8 py-3 ml-4 text-lg cursor-pointer rounded-md font-bold bg-[#df3636] text-white transition-transform transform hover:scale-105"
                                onClick={() => {
                                    stopRecording();
                                    pauseRecording();
                                }}
                            >
                                Stop
                            </button>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );

};
export default AudioRecorder;
