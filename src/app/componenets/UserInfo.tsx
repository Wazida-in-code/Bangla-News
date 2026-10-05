"use client";
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";

const UserInfo = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <div className="flex gap-3.5 items-center absolute right-4 top-4 text-sm">
      {user ? (
        <div className="flex flex-col gap-1 items-center">
          <Link href="/profile">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                <img alt="user-img" src={user?.image as string} />
              </div>
            </div>
          </Link>
          <h2 className="text-black">{user?.name}</h2>
          <button
            onClick={handleSignOut}
            className="btn btn-error bg-red-700 text-white text-sm btn-sm"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <Link href="/sign-in">
            <button className="btn btn-ghost text-neutral-700 transition-colors hover:text-red-700">
              সাইন ইন
            </button>
          </Link>

          <Link href="/sign-up">
            <button className="btn bg-red-600 text-white px-3 py-1.5 font-semibold transition-colors hover:bg-red-800">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
