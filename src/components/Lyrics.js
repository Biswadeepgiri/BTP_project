import React from "react";
import { useState } from "react";


const LyricsComponent = () => {
    const [language, setLanguage] = useState("");
    const [songs, setSongs] = useState([]);
    const [selectedSong, setSelectedSong] = useState("");
    const [lyrics, setLyrics] = useState("");

    // Song lists for each language
    const hindiSongs = ["Song A - Hindi", "Song B - Hindi", "Song C - Hindi"];
    const tamilSongs = ["Song A - Tamil", "Song B - Tamil", "Song C - Tamil"];
    const teluguSongs = ["Telugu_song1", "Telugu_song2", "Telugu_song3", "Telugu_song4"];

    const songLyrics = {
        "Song A - Hindi": "Lyrics for Song A in Hindi...",
        "Song B - Hindi": "Lyrics for Song B in Hindi...",
        "Song C - Hindi": "Lyrics for Song C in Hindi...",
        "Song A - Tamil": "Lyrics for Song A in Tamil...",
        "Song B - Tamil": "Lyrics for Song B in Tamil...",
        "Song C - Tamil": "Lyrics for Song C in Tamil...",
        "Telugu_song1": "చిట్టి చిలకమ్మా\nఅమ్మ కొట్టిందా\nతోటకెల్లావా\nపండు తెచ్చావా\nగూట్లో పెట్టావా\nగుటుక్కున మింగావా\nగూట్లో పెట్టావా\nగుటుక్కున మింగావా\nగుటుక్కున మింగావా\n\nచిట్టి చిలకమ్మా\nఅమ్మ కొట్టిందా\nతోటకెల్లావా\nపండు తెచ్చావా\nగూట్లో పెట్టావా\nగుటుక్కున మింగావా\nగూట్లో పెట్టావా\nగుటుక్కున మింగావా\nగుటుక్కున మింగావా",
        "Telugu_song2": "ఉడుత ఉడుతా ఊచ్\nఎక్కడికెళ్శావ్ ఊచ్\nఉడుత ఉడుతా ఊచ్\nఎక్కడికెళ్శావ్ ఊచ్\nకొమ్మ మీద జాంపండు కోసుకొస్తావా,\nమా పాపాయికిస్తావా..\nఉడుత ఉడుతా ఊచ్\nఎక్కడికెళ్శావోచ్\nఉడుత ఉడుతా ఊచ్\nఎక్కడికెళ్శావ్ ఊచ్\n\nఉడుత ఉడుతా ఊచ్\nఎక్కడికెళ్శావ్ ఊచ్\nఉడుత ఉడుతా ఊచ్\nఎక్కడికెళ్శావ్ ఊచ్\nకొమ్మ మీద జాంపండు కోసుకొస్తావా,\nమా పాపాయికిస్తావా..\nఉడుత ఉడుతా ఊచ్\nఎక్కడికెళ్శావోచ్\nఉడుత ఉడుతా ఊచ్\nఎక్కడికెళ్శావ్ ఊచ్",
        "Telugu_song3": "ఏనుగమ్మ ఏనుగు,\nఏ ఊరెళ్ళిందేనుగు?\nఏనుగమ్మ ఏనుగు,\nమా ఊరొచ్చిందేనుగు\nఏనుగు ఏనుగు నల్లన,\nఏనుగు కొమ్ములు తెల్లన\nఏనుగు ఏనుగు నల్లన,\nఏనుగు కొమ్ములు తెల్లన\nఏనుగు మీద రాముడు,\nఎంతో చక్కని దేవుడు\nఏనుగు మీద రాముడు,\nఎంతో చక్కని దేవుడు\n\nఏనుగమ్మ ఏనుగు,\nఏ ఊరెళ్ళిందేనుగు?\nఏనుగమ్మ ఏనుగు,\nమా ఊరొచ్చిందేనుగు\nఏనుగమ్మ ఏనుగు,\nఏ ఊరెళ్ళిందేనుగు?\nఏనుగమ్మ ఏనుగు,\nమా ఊరొచ్చిందేనుగు\nఏనుగు ఏనుగు నల్లన,\nఏనుగు కొమ్ములు తెల్లన\nఏనుగు ఏనుగు నల్లన,\nఏనుగు కొమ్ములు తెల్లన\nఏనుగు మీద రాముడు,\nఎంతో చక్కని దేవుడు\nఏనుగు మీద రాముడు,\nఎంతో చక్కని దేవుడు",
        "Telugu_song4": "బుర్రు పిట్ట బుర్రు పిట్ట తుర్రుమన్నది...\nపడమటింట కాపురం చేయనన్నది...\nఅత్త తెచ్చిన కొత్త చీర కట్టనన్నది...\nమామ తెచ్చిన మల్లె మొగ్గ ముడవనన్నది...\nమొగుడి చేత మొట్టికాయ తింటానన్నది...\nమొగుడి చేత మొట్టికాయ తింటానన్నది...\n\nబుర్రు పిట్ట బుర్రు పిట్ట తుర్రుమన్నది...\nపడమటింట కాపురం చేయనన్నది...\nఅత్త తెచ్చిన కొత్త చీర కట్టనన్నది...\nమామ తెచ్చిన మల్లె మొగ్గ ముడవనన్నది...\nమొగుడి చేత మొట్టికాయ తింటానన్నది...\nమొగుడి చేత మొట్టికాయ తింటానన్నది...",
    };


    function changeLanguage(lang) {
        setLanguage(lang);
        setSelectedSong("");
        setLyrics("");
        if (lang === "Hindi") {
            setSongs(hindiSongs);
        } else if (lang === "Tamil") {
            setSongs(tamilSongs);
        } else if (lang === "Telugu") {
            setSongs(teluguSongs);
        }
    }

    // Function to change song and display lyrics
    function handleSongChange(event) {
        const song = event.target.value;
        setSelectedSong(song);
        setLyrics(songLyrics[song] || "");
    }


    return (
        <div className="flex flex-col items-center  min-h-[70%] bg-gray-900 text-white p-4 sm:p-6 mx-6">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
                Selected language: <span className="text-indigo-400">{language || "None"}</span>
            </h1>
            <div className="flex flex-wrap gap-4 mb-6 sm:mb-8 justify-center">
                <button
                    onClick={() => changeLanguage("Hindi")}
                    className="px-4 py-2 sm:px-5 sm:py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transform transition-transform duration-200 hover:scale-105"
                >
                    Hindi
                </button>
                <button
                    onClick={() => changeLanguage("Tamil")}
                    className="px-4 py-2 sm:px-5 sm:py-3 bg-green-600 text-white rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transform transition-transform duration-200 hover:scale-105"
                >
                    Tamil
                </button>
                <button
                    onClick={() => changeLanguage("Telugu")}
                    className="px-4 py-2 sm:px-5 sm:py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transform transition-transform duration-200 hover:scale-105"
                >
                    Telugu
                </button>
            </div>

            {/* Dropdown for songs */}
            {language && (
                <div className="w-full max-w-md lg:max-w-lg mb-6">
                    <label className="block text-gray-300 font-medium mb-2 text-lg">Select a song:</label>
                    <select
                        onChange={handleSongChange}
                        value={selectedSong}
                        className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
                    >
                        <option value="">Choose a song</option>
                        {songs.map((song, index) => (
                            <option key={index} value={song}>
                                {song}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {/* Textarea for displaying lyrics */}
            {lyrics && (
                <div className="w-full max-w-md lg:max-w-lg">
                    <label className="block text-gray-300 font-medium mb-2 text-lg">Lyrics:</label>
                    <textarea
                        value={lyrics}
                        readOnly
                        rows="8"
                        className="w-full p-4 border border-gray-700 bg-gray-800 text-white rounded-md focus:outline-none resize-none"
                    />
                </div>
            )}
        </div>
    );

}

export default LyricsComponent;