import Style from "./Counter.module.css";
import ClassCount from "./ClassCount";
import FunctionCount from "./FunctionCount";

const Counter = () => {
  return (
    <div className={Style.container}>
      <h3 className={Style.heading}>Assignment-2 Counter Application</h3>
      <div className={Style.counters}>
        <FunctionCount />
        <ClassCount />
      </div>
    </div>
  );
};

export default Counter;
