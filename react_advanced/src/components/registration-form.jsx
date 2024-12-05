// import './App.css'; 
import { useState } from "react"; 
import { ValidateEmail } from "../components/utils";

const PasswordErrorMessage = () => { 
  return ( 
    <p className="text-red-500 text-sm mt-1">Password should have at least 8 characters</p> 
  ); 
}; 

function FormApp() { 
  const [firstName, setFirstName] = useState(""); 
  const [lastName, setLastName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState({ 
    value: "", 
    isTouched: false, 
  }); 
  const [role, setRole] = useState("role"); 

  const getIsFormValid = () => { 
    return ( 
      firstName && 
      ValidateEmail(email) && 
      password.value.length >= 8 && 
      role !== "role" 
    ); 
  }; 

  const clearForm = () => { 
    setFirstName(""); 
    setLastName(""); 
    setEmail(""); 
    setPassword({ 
      value: "", 
      isTouched: false, 
    }); 
    setRole("role"); 
  }; 

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    alert("Account created!"); 
    clearForm(); 
  }; 

  return ( 
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4"> 
      <form 
        onSubmit={handleSubmit} 
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md" 
      > 
        <fieldset>
          <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Sign Up</h2>
          <div className="mb-4">
            <label className="block font-semibold text-gray-700 mb-2"> 
              First name <sup className="text-red-500">*</sup> 
            </label> 
            <input 
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)} 
              placeholder="First name" 
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" 
            /> 
          </div> 
          <div className="mb-4"> 
            <label className="block font-semibold text-gray-700 mb-2">Last name</label> 
            <input 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)} 
              placeholder="Last name" 
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" 
            /> 
          </div> 
          <div className="mb-4"> 
            <label className="block font-semibold text-gray-700 mb-2"> 
              Email address <sup className="text-red-500">*</sup> 
            </label> 
            <input 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Email address" 
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" 
            /> 
          </div> 
          <div className="mb-4"> 
            <label className="block font-semibold text-gray-700 mb-2"> 
              Password <sup className="text-red-500">*</sup> 
            </label> 
            <input 
              value={password.value} 
              type="password" 
              onChange={(e) => setPassword({ ...password, value: e.target.value })} 
              onBlur={() => setPassword({ ...password, isTouched: true })} 
              placeholder="Password" 
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" 
            /> 
            {password.isTouched && password.value.length < 8 && <PasswordErrorMessage />} 
          </div> 
          <div className="mb-4"> 
            <label className="block font-semibold text-gray-700 mb-2"> 
              Role <sup className="text-red-500">*</sup> 
            </label> 
            <select 
              value={role} 
              onChange={(e) => setRole(e.target.value)} 
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" 
            > 
              <option value="role" disabled>Role</option> 
              <option value="individual">Individual</option> 
              <option value="business">Business</option> 
            </select> 
          </div> 
          <button 
            type="submit" 
            disabled={!getIsFormValid()} 
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed" 
          > 
            Create account 
          </button> 
        </fieldset> 
      </form> 
    </div> 
  ); 
} 

export { FormApp };
