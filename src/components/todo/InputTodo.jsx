import { useState } from "react";
import Styles from "./Todos.module.css";
import { AiOutlineCaretRight, AiTwotonePlusCircle } from "react-icons/ai";
import { MdLibraryAdd } from "react-icons/md";

const InputTodo = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState();
  const handleKeyDown = (event) => {
    // if (event.key === "Enter") {
    //    setInputValue(event.target.value);
    //   event.target.value = "";
    // }
    // else if (document.getElementById("addTodoBtn").click()) {
    //   setInputValue(event.target.value);
    //   event.target.value = "";
    // }

    // console.log(event.target.value);
    setInputValue(event.target.value);
  };
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <form className="w-full">
          <input
            type="text"
            className="bg-dark placeholder-gray-5 py-2
          px-5 rounded-l-full border-0 w-50 text-white"
            placeholder="Add New Todo"
            onKeyUp={handleKeyDown}
          ></input>
          <button
            id="addTodoBtn"
            type="reset"
            onClick={() => addTodo(inputValue)}
            className={`${Styles.addButton} bg-blue-700 hover:bg-blue-800 px-5 text-white border-0 py-2 mt-10`}
          >
            <MdLibraryAdd size={24} />
          </button>
        </form>
      </div>
    </>
  );
};
export default InputTodo;
