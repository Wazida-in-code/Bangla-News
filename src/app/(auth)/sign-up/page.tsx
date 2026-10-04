'use client'

import { signUp } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const SignUpPage = () => {

    const onSubmit = async(e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries()) as {name: string, email: string, image: string, password: string}

        const { data, error } = await signUp.email({
            ...user, 
            callbackURL: "/"
        });
        
        if (data){
            console.log(data);
            redirect('/');
        };

        if (error){
            console.log(error);
        }
    }

  return (
    <div className="flex flex-col items-center mt-6">
        <h1 className="font-bold text-2xl text-red-700 ">সাইন আপ</h1>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset w-md p-4">
          
          <label className="label text-gray-700 text-sm">নাম</label>
          <input type="text" name="name" className="input w-md mb-3" placeholder="Name" />

          <label className="label text-gray-700 text-sm">Image</label>
          <input type="url" name="image" className="input w-md mb-3" placeholder="Image" />

          <label className="label text-gray-700 text-sm">ইমেইল</label>
          <input type="email" name="email" className="input w-md mb-3" placeholder="Email" />

          <label className="label text-gray-700 text-sm">পাসওয়ার্ড</label>
          <input type="password" name="password" className="input w-md mb-3" placeholder="Password" />

          <button type="submit" className="btn bg-red-700 text-white mb-10 mt-4 w-md">সাইন আপ করুন</button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUpPage;
