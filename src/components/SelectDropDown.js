import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';

const SelectDropDown = ({ style, selectedLanguage, setShowModal }) => {
  return (
    <div className="select-drop-down w-[310px] m-auto" onClick={() => setShowModal(style)}>
      <input value={selectedLanguage} />
      <div className="arrow-down text-[#8ab4f8]">
        <ArrowDropDownSharpIcon />
      </div>
    </div>
  );
};

export default SelectDropDown;
