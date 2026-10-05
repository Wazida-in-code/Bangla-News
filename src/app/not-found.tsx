import Image from "next/image";
import Link from "next/link";


const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center mt-6 bg-blue-100">
            <Image className="w-100" width={100} height={100} alt="notFound" src={"/error-404.png"}></Image>
            <Link href={"/"} className="btn p-8 my-5 rounded-xl bg-blue-950 text-white">Go Home</Link>
        </div>
    );
};

export default NotFoundPage;