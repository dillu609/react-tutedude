import Style from "./Counter.module.css";
import ClassCount from "./ClassCount";
import FunctionCount from "./FunctionCount";

const Counter = () => {
  return (
    <div className={`${Style.container}  h-screen bg-green-300`}>
      <h3 className={Style.heading}>Assignment-1 Counters Application</h3>
      <div className={Style.counters}>
        <FunctionCount />
        <ClassCount />
      </div>
    </div>
  );
};

export default Counter;
