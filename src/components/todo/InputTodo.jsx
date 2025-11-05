import { useState } from "react";
import Styles from "./Todos.module.css";
import { AiOutlineCaretRight, AiTwotonePlusCircle } from "react-icons/ai";
import { MdLibraryAdd } from "react-icons/md";

const InputTodo = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleAdd = (e) => {
    e && e.preventDefault();
    if (!inputValue || inputValue.trim() === "") {
      // show browser alert for empty input
      alert("Please enter your todo");
      return;
    }

    addTodo(inputValue.trim());
    setInputValue("");

    // show simple toaster for success
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <form className="w-full" onSubmit={handleAdd}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="bg-dark placeholder-gray-5 py-2
          px-5 rounded-l-full border-0 w-50 text-white"
            placeholder="Add New Todo"
          ></input>
          <button
            id="addTodoBtn"
            type="button"
            onClick={handleAdd}
            className={`${Styles.addButton} bg-blue-700 hover:bg-blue-800 px-5 text-white border-0 py-2 mt-10`}
          >
            <MdLibraryAdd size={24} />
          </button>
        </form>
      </div>

      {showToast && (
        <div className={Styles.toast} role="status">
          Todo added successfully
        </div>
      )}
    </>
  );
};

export default InputTodo;
