"use client";
import { useSession } from "@/lib/auth-client";
import Link from "next/link";

const ProfilePage = () => {
  const { data: session } = useSession();
  const user = session?.user;
  
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
        </div>
    </div>
  );
};

export default ProfilePage;
