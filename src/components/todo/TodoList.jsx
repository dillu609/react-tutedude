import React from "react";

const TodoList = ({ todos }) => {
  return (
    <>
      <div className="container overflow-hidden text-center mt-5">
        <div className="row gy-5">
          {todos.map((todo, index) => (
            <div className="col-4" key={index}>
              <div
                className="p-3 bg-dark border-blue-500 border-2 text-white"
                key={index}
              >
                {todo}
              </div>
            </div>
          ))}
        </div>
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
