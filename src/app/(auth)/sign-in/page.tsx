import React from 'react';

const SignInPage = () => {
    return (
       <div className="flex flex-col items-center mt-6">
        <h1 className="font-bold text-2xl text-red-700 ">সাইন ইন</h1>
      <form>
        <fieldset className="fieldset w-md p-4">

          <label className="label text-gray-700 text-sm">ইমেইল</label>
          <input type="email" className="input w-md mb-3" placeholder="Email" />

          <label className="label text-gray-700 text-sm">পাসওয়ার্ড</label>
          <input type="password" className="input w-md mb-3" placeholder="Password" />

          <button className="btn bg-red-700 text-white mb-10 mt-4 w-md">সাইন ইন করুন</button>
        </fieldset>
      </form>
    </div>
    );
};

export default SignInPage;