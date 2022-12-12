import { useState } from "react";
import CancelSharpIcon from "@mui/icons-material/CancelSharp";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";

const Modal = ({
  showModal,
  setShowModal,
  languages,
  chosenLanguage,
  setChosenLanguage,
}) => {
  const [searchedLanguage, setSearchedLanguage] = useState("");

  const filteredLanguages = languages.filter((language) =>
    language.toLowerCase().startsWith(searchedLanguage.toLowerCase())
  );

  const handleChange = (e) => {
    setSearchedLanguage(e.target.value);
  };

  const handleClick = (e) => {
    setChosenLanguage(e.target.textContent);
    setShowModal(null);
  };

  console.log(searchedLanguage);
  return (
    <div className="options w-100">
      <div className="search-bar flex justify-center items-center p-2 max-w-3xl m-auto">
        <input value={searchedLanguage} onChange={handleChange} />
        <div
          className="close-button cursor-pointer text-white p-2"
          onClick={() => setShowModal(null)}
        >
          <CancelSharpIcon />
        </div>
      </div>
      <div className="option-container h-80 m-auto overflow-auto flex justify-center">
        <ul className="flex flex-row flex-wrap m-2 overflow-auto justify-center">
          {filteredLanguages?.map((filteredLanguage, _index) => (
            <div className="list-item m-1">
              <div className="icon p-1 text-[#8ab4f8]">
                {chosenLanguage === filteredLanguages[_index] ? (
                  <CheckSharpIcon />
                ) : (
                  ""
                )}
              </div>
              <li
                className="text-white list-none text-left px-2"
                key={_index}
                onClick={handleClick}
                style={{
                  color: chosenLanguage === filteredLanguage ? "#8ab4f8" : null,
                }}
              >
                {filteredLanguage}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
