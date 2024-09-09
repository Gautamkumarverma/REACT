// import { useState } from "react";

// function init() {
//   console.log("Init Was executed");
//   return Math.random();
// }

// export default function Counter() {
//   const [count, setCount] = useState(init); // This is hooks
//   console.log("Component rendered");
//   let inCount = () => {
//     setCount((currCount) => {
//       return currCount + 1;
//     });
//   };

//   return (
//     <div>
//       <p>Count = {count}</p>
//       <button onClick={inCount}>Increase Count</button>
//     </div>
//   );
// }
import { useState } from "react";

function init() {
  console.log("Init Was executed");
  return Math.random();
}

export default function Counter() {
  const [count, setCount] = useState(() => {
    console.log("Init Was executed");
    return Math.random();
  });
  console.log("Component rendered");
  let inCount = () => {
    setCount((currCount) => {
      return currCount + 1;
    });
  };

  return (
    <div>
      <p>Count = {count}</p>
      <button onClick={inCount}>Increase Count</button>
    </div>
  );
}
