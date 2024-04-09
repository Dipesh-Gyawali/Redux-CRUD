import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../action/action";

export const Counter = () => {
  const counter = useSelector((state) => state.counter);
  // console.log(counter, "CCCCCCCCCCCCCCC");

  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increment());
  };

  return (
    <div style={{ background: "white" }}>
      <button onClick={handleIncrease}>Increase</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <br></br>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};
