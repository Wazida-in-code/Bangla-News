import MainNews from "./componenets/MainNews";
import Marquee from "./componenets/Marquee"

export default async function Home() {
   const res = await fetch('https://news-api-v2.vercel.app/api/news/sections');
   const data = await res.json();
   const allNews = data.data
   const mainNews = allNews[0].articles

  return (
    <div>
      <Marquee />
      
      <div className="grid grid-cols-3 w-11/12 mx-auto">
        {/* main news */}
        <div className="col-span-2">
          <MainNews mainNews={mainNews} />
        </div>

        {/* most read news */}
        <div className="col-span-1 bg-red-200 p-20">

        </div>
      </div>
    </div>
  );
}
