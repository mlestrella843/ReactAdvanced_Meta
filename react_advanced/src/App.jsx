import React from 'react';
import './index.css';
// import FetchWithUseEffect from './components/fetch-with-useEffects';
import { FetchLab } from './components/fetch-lab';
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

function App() {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 mt-4">
      {/* <h2>Welcome to App Controlled Form</h2> */}
      {/* <FeedbackForm /> */}
      {/* <CoffeeShopMenu /> */}
      {/* <h2 className=" text-pink-400 font-sans font-bold">List of Low Calorie Desserts:</h2> */}
      {/* <DessertsList data={desserts} /> */}
      {/* <h3 className=" text-pink-400 font-sans font-bold"> Form </h3> */}
      {/* <Form /> */}
      {/* <FormNonControlToControl /> */}
      {/* <FormApp /> */}
      {/* <GreetClients /> */}
      {/* <Lab /> */}
      {/* <HookUSeEffect /> */}
      {/* <FetchData /> */}
      {/* <FetchWithUseEffect /> */}
      <FetchLab />

    </div>
  );
}
export default App;



