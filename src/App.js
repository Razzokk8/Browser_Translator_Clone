import { useEffect, useState } from "react";
import axios from "axios";
import Arrows from "./components/Arrows.js";
import Buttons from "./components/Button.js";
import Modal from "./components/Modal.js";
import TextBox from "./components/TxtBox.js";
import Label from "./components/Label.js";

// this will work with auto translate
const autoTranslate = () => {
  // TODO - implement auto translate
};
const App = () => {
  const [showModal, setShowModal] = useState(null);
  const [inputLanguage, setInputLanguage] = useState("English");
  const [outputLanguage, setOutputLanguage] = useState("Italian");
  const [languages, setLanguages] = useState(null);
  const [textToTranslate, setTextToTranslate] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const getLanguages = async () => {
    const response = await axios("http://localhost:8000/languages");
    setLanguages(response.data);
  };

  const translate = async () => {
    const data = {
      textToTranslate,
      outputLanguage,
      inputLanguage,
    };
    const response = await axios.get("http://localhost:8000/translation", {
      params: data,
    });
    console.log("response", response);
    setTranslatedText(response.data);
  };

  // console.log("languages", languages);

  useEffect(() => {
    getLanguages();
  }, []);

  const handleClick = () => {
    setInputLanguage(outputLanguage);
    setOutputLanguage(inputLanguage);
  };

  // console.log("showModal", showModal);

  return (
    <div className="App mt-16">
      <h1 className="text-white text-center text-xl mb-8">MY TRANSLATOR CLONE</h1>
      <br />

      {!showModal && (
        <div className="sub md:flex">
          <TextBox
            setShowModal={setShowModal}
            selectedLanguage={inputLanguage}
            style="input"
            textToTranslate={textToTranslate}
            setTextToTranslate={setTextToTranslate}
            setTranslatedText={setTranslatedText}
            translate={translate}
          />

          <div className="arrows-container mb-6" onClick={handleClick}>
            <Arrows />
          </div>

          <TextBox
            setShowModal={setShowModal}
            selectedLanguage={outputLanguage}
            style="output"
            translatedText={translatedText}
          />
          <div
            className="button-container text-white px-3 cursor-pointer"
            onClick={translate}
          >
            {/* <Buttons /> */}
          </div>
        </div>
      )}
      {showModal && (
{/*         <Modal
          languages={languages}
          setShowModal={setShowModal}
          chosenLanguage={showModal == "input" ? inputLanguage : outputLanguage}
          setChosenLanguage={
            showModal == "input" ? setInputLanguage : setOutputLanguage
          }
        /> */}
      )}
      {/* <Label /> */}
    </div>
  );
};

export default App;
