import "./sortByContainer.css";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import SortList from "../sortList/SortList";

const SortByContainer = ({ setOpenSort, openSort }) => {
  return (
    <>
      <div className="sortByContainer">
        <button
          onClick={() => setOpenSort(!openSort)}
          className="sortByContainerBtn"
        >
          {openSort ? (
            <AiFillCaretUp className="arrow" />
          ) : (
            <AiFillCaretDown className="arrow" />
          )}
          Sort By
        </button>
        <div>{openSort && <SortList />}</div>
      </div>
    </>
  );
};

export default SortByContainer;
