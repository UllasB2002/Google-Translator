import React, { useState } from 'react';
import './MiniHomePage.css'; // Import your CSS file for additional styling
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS

const countries = {
    "Amharic": "am",
    "Arabic": "ar",
    "Bielarus": "be",
    "Bemba": "bem",
    "Bislama": "bi",
    "Bajan": "bjs",
    "Bengali": "bn",
    "Tibetan": "bo",
    "Breton": "br",
    "Bosnian": "bs",
    "Catalan": "ca",
    "Coptic": "cop",
    "Czech": "cs",
    "Welsh": "cy",
    "Danish": "da",
    "Dzongkha": "dz",
    "German": "de",
    "Maldivian": "dv",
    "Greek": "el",
    "English": "en",
    "Spanish": "es",
    "Estonian": "et",
    "Basque": "eu",
    "Persian": "fa",
    "Finnish": "fi",
    "Fanagalo": "fn",
    "Faroese": "fo",
    "French": "fr",
    "Galician": "gl",
    "Gujarati": "gu",
    "Hausa": "ha",
    "Hebrew": "he",
    "Hindi": "hi",
    "Croatian": "hr",
    "Hungarian": "hu",
    "Indonesian": "id",
    "Icelandic": "is",
    "Italian": "it",
    "Japanese": "ja",
    "Kazakh": "kk",
    "Khmer": "km",
    "Kannada": "kn",
    "Korean": "ko",
    "Kurdish": "ku",
    "Kyrgyz": "ky",
    "Latin": "la",
    "Lao": "lo",
    "Latvian": "lv",
    "Mende": "men",
    "Malagasy": "mg",
    "Maori": "mi",
    "Malay": "ms",
    "Maltese": "mt",
    "Burmese": "my",
    "Nepali": "ne",
    "Niuean": "niu",
    "Dutch": "nl",
    "Norwegian": "no",
    "Nyanja": "ny",
    "Pakistani": "ur",
    "Palauan": "pau",
    "Panjabi": "pa",
    "Pashto": "ps",
    "Pijin": "pis",
    "Polish": "pl",
    "Portuguese": "pt",
    "Kirundi": "rn",
    "Romanian": "ro",
    "Russian": "ru",
    "Sango": "sg",
    "Sinhala": "si",
    "Slovak": "sk",
    "Samoan": "sm",
    "Shona": "sn",
    "Somali": "so",
    "Albanian": "sq",
    "Serbian": "sr",
    "Swedish": "sv",
    "Swahili": "sw",
    "Tamil": "ta",
    "Telugu": "te",
    "Tetum": "tet",
    "Tajik": "tg",
    "Thai": "th",
    "Tigrinya": "ti",
    "Turkmen": "tk",
    "Tagalog": "tl",
    "Tswana": "tn",
    "Tongan": "to",
    "Turkish": "tr",
    "Ukrainian": "uk",
    "Uzbek": "uz",
    "Vietnamese": "vi",
    "Wolof": "wo",
    "Xhosa": "xh",
    "Yiddish": "yi",
    "Zulu": "zu"
};

export default function MiniHomePage() {
    const [flang, setFlang] = useState('');
    const [tlang, setTlang] = useState('');
    const [Stext, setStext] = useState('');
    const [Ttext, setTtext] = useState('');

    function send() {
        let apiUrl = `https://api.mymemory.translated.net/get?q=${Stext}&langpair=${countries[flang]}|${tlang}`;

        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                setTtext(data.responseData.translatedText);
            });
    }

    function handleSourceLanguageChange(e) {
        setFlang(e.target.value);
    }

    function handleTranslatedLanguageChange(e) {
        setTlang(e.target.value);
    }

    function handleSourceTextChange(e) {
        setStext(e.target.value);
    }

    function handleTranslatedTextChange(e) {
        setTtext(e.target.value);
    }

    return (
        <div className="container mt-5 custom-width div1">
            <div className="text-center mb-5 div1">
                <p id="teamName"><b>Language Translator</b></p>
            <div className="card p-4 fontSetter">
                <div className="row mb-3 fontSetter">
                    <div className="col-md-6 fontSetter">
                        <label htmlFor="sourceLang">Source Language:</label>
                        <select id="sourceLang" className="form-select fontSetter" value={flang} onChange={handleSourceLanguageChange}>
                            <option value="" className='halffontSetter'>Select Source Language</option>
                            {Object.keys(countries).map(lang => (
                                <option key={lang} value={lang} className='halffontSetter'>{lang}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-6 fontSetter">
                        <label htmlFor="translatedLang">Translated Language:</label>
                        <select id="translatedLang" className="form-select" value={tlang} onChange={handleTranslatedLanguageChange}>
                            <option value="" className='halffontSetter'>Select Translated Language</option>
                            {Object.keys(countries).map(lang => (
                                <option key={lang} value={lang} className='halffontSetter'>{lang}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="row mb-3 fontSetter">
                    <div className="col-md-12 fontSetter">
                        <label htmlFor="sourceText">Text to Translate:</label>
                        <textarea id="sourceText" className="form-control fontSetter" rows="3" value={Stext} onChange={handleSourceTextChange}></textarea>
                    </div>
                </div>
                <div className="text-center mb-3 fontSetter">
                    <button className="btn btn-primary fontSetter translateButton" onClick={send}><p className='fontSetter'>Translate</p></button>
                </div>
                <div className="row mb-3 fontSetter">
                    <div className="col-md-12 fontSetter">
                        <label htmlFor="translatedText">Translation Result:</label>
                        <textarea id="translatedText" className="form-control fontSetter" rows="3" value={Ttext} onChange={handleTranslatedTextChange} readOnly></textarea>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
