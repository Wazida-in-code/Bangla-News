import Image from "next/image";
import { Article } from "../page";
import Link from "next/link";

const NewsCard = ({ news }: { news: Article }) => {
  return (
    <Link href={`/news/${news.id}`}>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <Image
            width={500}
            height={600}
            alt={news.imageAlt}
            src={news.imageUrl}
          />
        </figure>
        <div className="card-body">
          <p className="text-red-700 font-semibold">{news.category}</p>
          <h2 className="card-title">{news.title}</h2>
          <p>{news.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
