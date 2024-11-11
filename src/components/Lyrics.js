import React from "react";
import { useState } from "react";


const LyricsComponent = () => {
    const [language, setLanguage] = useState("");
    const [songs, setSongs] = useState([]);
    const [selectedSong, setSelectedSong] = useState("");
    const [lyrics, setLyrics] = useState("");

    // Song lists for each language
    const hindiSongs = ["Hindi_song1", "Hindi_song2", "Hindi_song3", "Hindi_song4"];
    const tamilSongs = ["aanai-Aanai-Azhagar", "amma-Inge-Vaa-Vaa", "anile-Anile-Odi-Vaa", "dosai-Amma-Dosai"];
    const teluguSongs = ["Telugu_song1", "Telugu_song2", "Telugu_song3", "Telugu_song4"];

    const songLyrics = {
        "Hindi_song1": "बिल्ली मौसी, बिल्ली मौसी, कहो कहाँ से आई हो\nकितने चूहे मारे तुमने? कितने खा के आई हो?\nकितने चूहे मारे तुमने? कितने खा के आई हो?\n\nक्या बताऊँ शीला बहन, आज नहीं कुछ पेट भरा\nएक ही चूहा खाया मैंने, वो भी बिलकुल सड़ा हुआ\nएक ही चूहा खाया मैंने, वो भी बिलकुल सड़ा हुआ",
        "Hindi_song2": "आसमान में निकले तारे\nचंदा मामा कितने प्यारे\nचंदा मामा, चंदा मामा\n\nसबके मन को बहलाते हैं\nनई चाँदनी छिटकाते हैं\nचंदा मामा, चंदा मामा\n\nदेखो इन की शान निराली\nसूरत कितनी भोली-भाली\nरोज़सवेरे छुप जाते हैं\nजैसे हम से शरमाते हैं\nचंदा मामा, चंदा मामा\n\nआओ,चंदा मामा आओ\nअपने घर की बात सुनाओ\nआओ,चंदा मामा आओ\nअपने घर की बात सुनाओ\nचंदा मामा, चंदा मामा",
        "Hindi_song3": "चुन्नू मुन्‍नू ये दो भाई\n\nरस गुल्ले पे हुई लड़ाई\nचुन्नू बोला, \"मैं खाऊँगा\"\nमुन्‍नू बोला, \"मैं खाऊँगा\"\n\nहल्ला सुनकर आई\nदोनों को एक चपत लगाई\n\nकभी ना लड़ना, कभी ना झगड़ना\nआपस में तम मिलकर रहना",
        "Hindi_song4": "बंदर मामा पहन पजामा दावत खाने आए\nबंदर मामा पहन पजामा दावत खाने आए\nढीला कुर्ता, टोपी-जूता पहन बहुत इतराए\nढीला कुर्ता, टोपी-जूता पहन बहुत इतराए\n\nरसगुल्ले पर जी ललचाया, मुँह में रखा कब से\nरसगुल्ले पर जी ललचाया, मुँह में रखा कब से\nनरम-नरम था, गरम-गरम था, जीभ जल गई लप से\nनरम-नरम था, गरम-गरम था, जीभ जल गई लप से\n\nबंदर मामा रोते-रोते वापस घर को आए\nबंदर मामा रोते-रोते वापस घर को आए\nफेंकी टोपी, फेंका जूता, रोए और पछताए\nफेंकी टोपी, फेंका जूता, रोए और पछताए",
        "aanai-Aanai-Azhagar": "ஆனை ஆனை அழகர் ஆனை\n\nஅழகரும் சொக்கரும் ஏறும் ஆனை\n\nகட்டிக்கரும்பை முறிக்கும் ஆனை\n\nகாவேரி தண்ணீரை கலக்கும் ஆனை\n\nகுட்டி ஆனைக்குக் கொம்பு முளைச்சுதாம்\n\nபட்டணமெல்லாம் பறந்தோடிப் போச்சுதாம்!",
        "amma-Inge-Vaa-Vaa": "அம்மா இங்கே வா! வா!\nஆசை முத்தம் தா! தா!\nஇலையில் சோறு போட்டு\nஈயைத் தூர ஓட்டு\nஉன்னைப் போன்ற நல்லார்,\nஊரில் யாவர் உள்ளார்?\nஎன்னால் உனக்குத் தொல்லை\nஏதும் இங்கே இல்லை\nஐயமின்றி சொல்லுவேன்\nஒற்றுமை என்றும் பலமாம்\nஓதும் செயலே நலமாம்\nஔவை சொன்ன மொழியாம்\nஅஃதே எனக்கு வழியாம்.",
        "anile-Anile-Odi-Vaa": "அணிலே அணிலே ஓடிவா\nஅழகு அணிலே ஓடிவா\n\nகொய்யாமரம் ஏறிவா\nகுண்டுப்பழம் கொண்டு வா\n\nபாதிப்பழம் என்னிடம்\nமீதிப்பழம் உன்னிடம்\n\nகூடிக்கூடி இருவரும்\nகொறித்துக் கொறித்து தின்னலாம்",
        "dosai-Amma-Dosai": "தோசை அம்மா தோசை\nஅம்மா சுட்ட தோசை!\nஅரிசி மாவும் உளுந்து மாவும்\nகலந்து சுட்ட தோசை!\nஅப்பாவுக்கு நாலு\nஅம்மாவுக்கு மூன்று\nஅண்ணணூக்கு இரண்டு\nபாப்பாவுக்கு ஒன்று\nதிங்க திங்க ஆசை\nஇன்னும் கேட்டால் பூசை!",
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