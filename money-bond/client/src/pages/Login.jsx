import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    // Add your authentication logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#222831]">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-[#393E46] text-[#EEEEEE]">
        
        {/* Branding */}
        {/* <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-[#00ADB5]">MoneyBond</h1>
          <p className="mt-2 text-sm text-[#EEEEEE]">
            Your secure way to manage money.
          </p>
        </div> */}

        <h2 className="text-3xl font-bold text-center text-[#00ADB5]">
          Welcome Back
        </h2>
        <p className="mt-2 text-sm text-center text-[#EEEEEE]">
          Please sign in to your account.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#EEEEEE]"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-2 rounded-lg bg-[#222831] text-[#EEEEEE] border border-[#00ADB5] focus:ring-2 focus:ring-[#00ADB5] focus:outline-none"
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#EEEEEE]"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="w-full px-4 py-2 mt-2 rounded-lg bg-[#222831] text-[#EEEEEE] border border-[#00ADB5] focus:ring-2 focus:ring-[#00ADB5] focus:outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-lg font-medium rounded-lg bg-[#00ADB5] text-[#222831] hover:bg-[#EEEEEE] hover:text-[#393E46] focus:outline-none focus:ring-4 focus:ring-[#00ADB5]"
          >
            Sign In
          </button>
        </form>

        <div className="mt-4 text-center">
          <a
            href="#"
            className="text-sm hover:underline text-[#00ADB5]"
          >
            Forgot your password?
          </a>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-[#EEEEEE]">
            Don’t have an account?{' '}
            <a
              href="#"
              className="font-medium hover:underline text-[#00ADB5]"
            >
              Sign up now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
