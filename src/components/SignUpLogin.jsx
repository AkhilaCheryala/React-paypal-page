import React, { useState } from 'react';

const SignUpLogin = ({ onSignUp, onLogin, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      onSignUp(username, password);
    } else {
      onLogin(username, password);
    }
    setUsername('');
    setPassword('');
  };

  const handleClose = () => {
    setIsSignUp(false);
    onClose(); // Close the SignUpLogin component
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-8  rounded-md w-80">
        <button
          onClick={handleClose}
          className=" font-bold ml-[15rem] mt-[-1rem] text-red-700 text-xl "
        >
          X
        </button>
        {isSignUp ? (
          <div>
            <h2 className="text-2xl font-bold mb-6 underline text-blue-600 text-center">Sign Up</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border p-2 rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 rounded-md"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-300"
              >
                Sign Up
              </button>
              <button
                onClick={() => setIsSignUp(false)}
               
              >
                Already have an account? <span  className="text-blue-500 underline mt-2">Login</span>
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-bold underline  mb-6 text-center text-blue-600">Login</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border p-2 rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 rounded-md"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Login
              </button>
              <button
                onClick={() => setIsSignUp(true)}
                
              >
                Don't have an account? <span className="text-blue-500 mt-2 underline">Sign Up</span> 
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpLogin;
