import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  return (
    <form className="flex flex-col items-center w-[90%] sm:w-96 mt-14 m-auto gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mt-10 mb-2 ">
        <p className="text-3xl prata-regular ">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Login" ? null : (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800 "
          placeholder="Name"
          required
        />
      )}
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800 "
        placeholder="Email"
        required
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800 "
        placeholder="Password"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px] ">
        <p className="cursor-pointer">Forgot your password?</p>
        {currentState === "Login" ? (
          <p onClick={() => setCurrentState("Sign Up")} className="cursor-pointer">Create account</p>
        ) : (
          <p onClick={() => setCurrentState("Login")} className="cursor-pointer">Login Here</p>
        )}
      </div>
    </form>
  );
};

export default Login;
