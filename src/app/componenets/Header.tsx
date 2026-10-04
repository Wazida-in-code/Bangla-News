import Image from "next/image";
import NavLinks from "./NavLinks";
import UserInfo from "./UserInfo";

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", 
        {
            dateStyle: "full"
        }
    )
    return (
        <header className="w-11/12 mx-auto px-4 py-4 relative">
            <div className="flex justify-center">
                <div className="flex gap-3">
                    <Image src="/logo.webp" alt="logo" width={50} height={10} priority></Image>

                    <div className="flex flex-col items-center sm:items-start">
                        <h2 className="text-2xl text-red-700 font-bold">Bangla News 24</h2>
                        <h2 className="text-neutral-500 text-xs">{date}</h2>
                    </div>

                </div>

                <UserInfo />
            </div>

            <NavLinks />
        </header>
    );
};

export default Header;