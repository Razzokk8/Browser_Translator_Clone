import Select from "./SelectDropDown.js";
import ClearSharpIcon from "@mui/icons-material/ClearSharp";

const TextBox = ({
  style,
  selectedLanguage,
  setShowModal,
  setTextToTranslate,
  textToTranslate,
  translatedText,
  setTranslatedText,
  translate,
}) => {
  const handleClick = () => {
    setTextToTranslate("");
    setTranslatedText("");
  };

  const handleKeyDown = (event) => {
    console.log(event.key);
    if (event.metaKey && event.key === "Enter") {
      translate();
    }
  };
  return (
    <div className={style}>
      <Select
        style={style}
        setShowModal={setShowModal}
        selectedLanguage={selectedLanguage}
      />
      <textarea
        placeholder={style == "input" ? "Enter text" : "Translation"}
        disabled={style == "output"}
        onChange={(e) => setTextToTranslate(e.target.value)}
        value={style == "input" ? textToTranslate : translatedText}
        onKeyDown={handleKeyDown}
      />
      {style == "input" && (
        <div className="delete" onClick={handleClick}>
          <ClearSharpIcon />
        </div>
      )}
    </div>
  );
};

export default TextBox;
