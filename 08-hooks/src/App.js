import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Info from "./Info";

function App() {
  // const [visible, setVisible] = useState(false);

  // return <Counter />;
  return <Info />;
  // return (
  //   <div>
  //     <button
  //       onClick={() => {
  //         setVisible(!visible);
  //       }}
  //     >
  //       {visible ? "숨기기" : "보이기"}
  //     </button>
  //     <hr />
  //     {visible && <Info />}
  //   </div>
  // );
}

export default App;
