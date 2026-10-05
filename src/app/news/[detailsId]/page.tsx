import { notFound } from "next/navigation";


const NewsDetailsPage = async({params}:{params:{detailsId:string}}) => {
    const {detailsId} = await params
    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${detailsId}`)
    const data = await res.json()
    const allNewsData = data.data
    
    if (!allNewsData){
        notFound()
    }

    return (
        <div className="w-11/12 mt-10 mx-auto">
            <h1 className="font-bold text-3xl pb-5">{allNewsData.title}</h1>
            <p>{allNewsData.text}</p>
        </div>
    );
};

export default NewsDetailsPage;