import React, { useEffect, useState } from "react";
import styles from "./Todos.module.css";

const TodoList = ({ todos }) => {
  const [completed, setCompleted] = useState(() => todos.map(() => false));

  useEffect(() => {
    // Preserve existing completed states and add false for new items
    setCompleted((prev) => {
      const newCompleted = [...prev];
      while (newCompleted.length < todos.length) {
        newCompleted.push(false);
      }
      return newCompleted.slice(0, todos.length);
    });
  }, [todos]);

  const toggleCompleted = (index) => {
    setCompleted((prev) => {
      const copy = [...prev];
      copy[index] = !copy[index];
      return copy;
    });
  };
  return (
    <>
      <div className="container overflow-hidden text-center mt-5">
        <form>
          <div className="row gy-5">
            {todos.map((todo, index) => (
              <div className="col-3" key={index}>
                <div className="p-3 bg-dark border-blue-500 border-2 text-white">
                  <input
                    type="checkbox"
                    checked={!!completed[index]}
                    onChange={() => toggleCompleted(index)}
                    aria-label={`Toggle todo ${index}`}
                  />
                  <span
                    className={
                      completed[index] ? `${styles.completed} ms-2` : "ms-2"
                    }
                  >
                    {todo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </form>
      </div>
      {/* <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul> */}
    </>
  );
};

export default TodoList;
