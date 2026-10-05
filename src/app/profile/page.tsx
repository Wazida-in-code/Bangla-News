"use client";
import { authClient, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";

const ProfilePage = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const [show, setShow] = useState(false)

  const handleUpdateProfile = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUser = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
    };

    await authClient.updateUser({
      ...newUser,
    });
  };

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <div className="mt-5">
      <div className="flex flex-col gap-1 items-center">
        <Link href="/profile">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
              <img alt="user-img" src={user?.image as string} />
            </div>
          </div>
        </Link>
        <h2>{user?.name}</h2>
        <h2>{user?.email}</h2>

        <button onClick={handleShow} className="btn bg-blue-100 mt-3">Edit Profile</button>

        {show && <form onSubmit={handleUpdateProfile}>
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

            <button
              type="submit"
              className="btn bg-red-700 text-white mb-10 mt-4 w-md"
            >
              Update your profile
            </button>
          </fieldset>
        </form>}
      </div>
    </div>
  );
};

export default ProfilePage;
