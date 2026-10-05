"use client";

import { authClient, signIn } from "@/lib/auth-client";
import { toast } from "react-toastify";

const SignInPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };
    const { data, error } = await signIn.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      toast.success("Sign In Successfully!");
      console.log(data);
    }

    if (error) {
      toast.error(error.message);
      console.log(data);
    }
  };

  const handleGoogleSignIn = async () => {
      const data = await authClient.signIn.social({
        provider: "google",
      });
      console.log(data);
    };
  const handleGithubSignIn = async () => {
      const data = await authClient.signIn.social({
        provider: "github",
      });
      console.log(data);
    };


  return (
    <div className="flex flex-col items-center mt-6">
      <h1 className="font-bold text-2xl text-red-700 ">সাইন ইন</h1>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset w-md p-4">
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
            সাইন ইন করুন
          </button>
        </fieldset>
      </form>

      <button onClick={handleGoogleSignIn} className="btn bg-blue-100 mt-3">Sign In with Google</button>
      <button onClick={handleGithubSignIn} className="btn bg-blue-100 mt-3">Sign In with Github</button>
    </div>
  );
};

export default SignInPage;
