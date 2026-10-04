import MainNews from "./componenets/MainNews";
import MostRead from "./componenets/MostRead";
import NewsCard from "./componenets/NewsCard";

interface AllNewsType{
  title: string,
  curationId: string,
  curationType: string,
  link: null,
  count: number,
  articles: Article[]
}

export interface Article {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished: string;
  source: string;
}


export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const allNews = data.data;
  const mainNews = allNews[0].articles;
  const allOtherNews = allNews.slice(1);

  return (
    <div>

      <div className="grid grid-cols-3 w-11/12 mx-auto gap-9">
        {/* main news */}
        <div className="col-span-2">
          <MainNews mainNews={mainNews} />

          <div>
            {allOtherNews.map((otherNews: AllNewsType) => (
              <div key={otherNews.curationId}>
                <h1 className="border-b-2 border-red-700 font-bold mt-7 mb-2">
                  {otherNews.title}
                </h1>

                <div className="grid grid-cols-3 gap-4">{
                  otherNews.articles.map((news: Article) => (
                    <NewsCard key={news.id} news={news} />
                  ))
                }</div>
              </div>
            ))}
          </div>
        </div>

        {/* most read news */}
        <div className="col-span-1 mt-6">
            <MostRead />
        </div>
      </div>
    </div>
  );
}
