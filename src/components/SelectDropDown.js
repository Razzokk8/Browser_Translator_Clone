import ArrowDownwardSharpIcon from "@mui/icons-material/ArrowDownwardSharp";

const SelectDropDown = ({ style, selectedLanguage, setShowModal }) => {
  return (
    <div className="select-drop-down" onClick={() => setShowModal(style)}>
      <input value={selectedLanguage} />
      <div className="arrow-down text-white">
        <ArrowDownwardSharpIcon />
      </div>
    </div>
  );
};

export default SelectDropDown;
