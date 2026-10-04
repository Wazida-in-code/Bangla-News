import Image from "next/image";
import Link from "next/link";

interface MainNewsType {
  id: number;
  imageUrl: string;
  category: string;
  title: string;
  description: string;
}

const MainNews = ({ mainNews }: { mainNews: MainNewsType[] }) => {
  const [firstNews, ...othersNews] = mainNews;

  return (
    <div className="flex mt-6 gap-4 mb-4">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <Image width={500} height={600} alt="card" src={firstNews.imageUrl} />
        </figure>
        <div className="card-body">
          <p className="text-red-700 font-semibold">{firstNews.category}</p>
          <h2 className="card-title">{firstNews.title}</h2>
          <p>{firstNews.description}</p>
        </div>
      </div>

      <div className="border overflow-hidden border-neutral-200 rounded-xl">
        {othersNews.slice(0, 4).map((news) => (
          <Link key={news.id} href={`/news/${news.id}`}>
            <div className="border border-neutral-200 p-3">
              <p className="text-red-700 pb-1 font-semibold">{news.category}</p>

              <h3 className="font-bold">{news.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
