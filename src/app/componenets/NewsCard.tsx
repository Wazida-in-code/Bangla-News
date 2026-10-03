import Image from 'next/image';
import { Article } from '../page';

const NewsCard = ({news}: {news: Article}) => {
    console.log(news);
    return (
       <div className="card bg-base-100 shadow-sm">
               <figure>
                 <Image width={500} height={600} alt={news.imageAlt} src={news.imageUrl} />
               </figure>
               <div className="card-body">
                 <p className="text-red-700 font-semibold">{news.category}</p>
                 <h2 className="card-title">{news.title}</h2>
                 <p>{news.description}</p>
               </div>
             </div>
    );
};

export default NewsCard;