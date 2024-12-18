import React from 'react';
import './index.css';
// import { LiveOrders } from './components/react-clone-children';
import { UserProfileWithLogging } from './components/cross-cutting';
// import { Counter } from './components/useReducer';
// import FetchWithUseEffect from './components/fetch-with-useEffects';
// import { FetchLab } from './components/fetch-lab';
// import { CounterApp } from './components/counter-app';
// import { FetchData } from './components/fetch-with-hooks';
// import { FeedbackForm } from './components/feedback-form';
// import { FormApp } from './components/registration-form';
// import { GreetClients } from './components/hooks';
// import CoffeeShopMenu from './components/lemon-coffee-shop';
// import { DessertsList } from './components/desserts-list';
// import {Form} from './components/form_controlled';
// import { FormNonControlToControl } from './components/form_uncont_controll';
// import Lab from './components/labHooksObjects';
// import { HookUSeEffect } from './components/sideEffectsHook';
// import { LabCustom } from './components/CustomHooks/useCustom-lab';


// const desserts = [
//   {
//     name: "Chocolate Cake",
//     calories: 400,
//     createdAt: "2022-09-01",
//   },
//   {
//     name: "Ice Cream",
//     calories: 200,
//     createdAt: "2022-01-02",
//   },
//   {
//     name: "Tiramisu",
//     calories: 300,
//     createdAt: "2021-10-03",
//   },
//   {
//     name: "Cheesecake",
//     calories: 600,
//     createdAt: "2022-01-04",
//   },
// ];

// function App() {
//   return (
//     <div className="w-full max-w-screen-lg mx-auto px-4 mt-4">
//       {/* <h2>Welcome to App Controlled Form</h2> */}
//       {/* <FeedbackForm /> */}
//       {/* <CoffeeShopMenu /> */}
//       {/* <h2 className=" text-pink-400 font-sans font-bold">List of Low Calorie Desserts:</h2> */}
//       {/* <DessertsList data={desserts} /> */}
//       {/* <h3 className=" text-pink-400 font-sans font-bold"> Form </h3> */}
//       {/* <Form /> */}
//       {/* <FormNonControlToControl /> */}
//       {/* <FormApp /> */}
//       {/* <GreetClients /> */}
//       {/* <Lab /> */}
//       {/* <HookUSeEffect /> */}
//       {/* <FetchData /> */}
//       {/* <FetchWithUseEffect /> */}
//       {/* <FetchLab /> */}
//       {/* <CounterApp /> */}
//       {/* <LabCustom /> */}
//       {/* <Counter /> */}
//       {/* <LiveOrders /> */}

//     </div>
//   );
// }
// export default App;

// Using HOC using Cross Cutting
function App() {
  return (
    <div>
      <UserProfileWithLogging name="JohnDoe" />
      <UserProfileWithLogging name="JaneDoe" />
    </div>
  );
}

export default App;






// Using React.cloneElement and react.Children
// import "./App.css";
// import { RadioGroup, RadioOption } from "./Radio";
// import { useState } from "react";

// function App() {
//   const [selected, setSelected] = useState("");
//   return (
//     <div className="App min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
//         <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
//           How did you hear about Little Lemon?
//         </h2>
//         <RadioGroup onChange={setSelected} selected={selected}>
//           <RadioOption value="social_media">Social Media</RadioOption>
//           <RadioOption value="friends">Friends</RadioOption>
//           <RadioOption value="advertising">Advertising</RadioOption>
//           <RadioOption value="other">Other</RadioOption>
//         </RadioGroup>
//         <button
//           disabled={!selected}
//           className={`mt-6 w-full py-2 px-4 rounded-md text-white font-semibold ${
//             selected
              // ? "bg-blue-600 hover:bg-blue-700 cursor-pointer"
//               : "bg-gray-300 cursor-not-allowed"
//           }`}
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;
