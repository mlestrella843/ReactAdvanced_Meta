// Component Uncontrolled
// function FormNonControlToControl() {
//   return (
//     <div>
//       <form action="">
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input type="text" placeholder="Name" name="name" />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
// export { FormNonControlToControl };

// Transforming into controlled components

import { useState } from "react";
function FormNonControlToControl() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setName("");
    console.log("Form submitted");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="bg-gray-200 m-6 p-6">
          <label htmlFor="name" className="text-gray-800 mr-2">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-blue-600 rounded"
          />
           <button disabled={!name} className="bg-green-600 text-white border-2 border-gray-200 px-4 ml-2 rounded" type="submit">Submit</button>
    
        </div>

         </form>
    </div>
  );
}
export { FormNonControlToControl };
