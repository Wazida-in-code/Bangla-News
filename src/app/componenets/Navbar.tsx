import Image from "next/image";

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

                <div className="flex gap-3.5 items-center absolute right-4 top-4 text-sm">
                    <button className="btn btn-ghost text-neutral-700 transition-colors hover:text-red-700">সাইন ইন</button>

                    <button className="btn bg-red-600 text-white px-3 py-1.5 font-semibold transition-colors hover:bg-red-800">সাইন আপ</button>
                </div>
            </div>
        </header>
    );
};

export default Header;