import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log({ name, email, password });
    // Add your registration logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#222831]">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-[#393E46] text-[#EEEEEE]">
        
        {/* Branding */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-[#EEEEEE]">MoneyBond</h1>
          <p className="mt-2 text-sm text-[#EEEEEE]">
            Your secure way to manage money.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-center text-[#00ADB5]">Create an Account</h2>
        <p className="mt-2 text-sm text-center text-[#EEEEEE]">
          Please fill in the details to create an account.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#EEEEEE]"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-2 mt-2 rounded-lg bg-[#222831] text-[#EEEEEE] border border-[#00ADB5] focus:ring-2 focus:ring-[#00ADB5] focus:outline-none"
              />
            </div>

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
                placeholder="Choose a password"
                className="w-full px-4 py-2 mt-2 rounded-lg bg-[#222831] text-[#EEEEEE] border border-[#00ADB5] focus:ring-2 focus:ring-[#00ADB5] focus:outline-none"
              />
            </div>

            {/* Confirm Password Field */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-[#EEEEEE]"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm your password"
                className="w-full px-4 py-2 mt-2 rounded-lg bg-[#222831] text-[#EEEEEE] border border-[#00ADB5] focus:ring-2 focus:ring-[#00ADB5] focus:outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-lg font-medium rounded-lg bg-[#00ADB5] text-[#EEEEEE] hover:bg-[#EEEEEE] hover:text-[#222831] focus:outline-none focus:ring-4 focus:ring-[#00ADB5]"
          >
            Register
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-[#EEEEEE]">
            Already have an account?{' '}
            <a
              href="/login"
              className="font-medium hover:underline text-[#00ADB5]"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
