import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  return (
    <form className="flex flex-col items-center w-[90%] sm:w-96 mt-14 m-auto gap-4 text-gray-800"></form>
  );
};

export default Login;
