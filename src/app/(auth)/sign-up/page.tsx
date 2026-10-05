"use client";

import { authClient, signUp } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
    };

    const { data, error } = await signUp.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      toast.success("Sign Up Successfully!");
      console.log(data);
      redirect("/");
    }

    if (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  const handleGoogleSignUp = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <h1 className="font-bold text-2xl text-red-700 ">সাইন আপ</h1>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset w-md p-4">
          <label className="label text-gray-700 text-sm">নাম</label>
          <input
            type="text"
            name="name"
            className="input w-md mb-3"
            placeholder="Name"
          />

          <label className="label text-gray-700 text-sm">Image</label>
          <input
            type="url"
            name="image"
            className="input w-md mb-3"
            placeholder="Image"
          />

          <label className="label text-gray-700 text-sm">ইমেইল</label>
          <input
            type="email"
            name="email"
            className="input w-md mb-3"
            placeholder="Email"
          />

          <label className="label text-gray-700 text-sm">পাসওয়ার্ড</label>
          <input
            type="password"
            name="password"
            className="input w-md mb-3"
            placeholder="Password"
          />

          <button
            type="submit"
            className="btn bg-red-700 text-white mb-10 mt-4 w-md"
          >
            সাইন আপ করুন
          </button>
        </fieldset>
      </form>
      <button onClick={handleGoogleSignUp} className="btn mt-3 bg-blue-100">
        Sign Up with Google
      </button>
    </div>
  );
};

export default SignUpPage;
