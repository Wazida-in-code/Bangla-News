import Image from "next/image";
import Link from "next/link";

interface categoryDataType{
    title: string,
    id: string,
    imageAlt: string,
    imageUrl: string,
    description: string,
    category: string
}

const CategoryIdPage = async ({ params }: {params: {categoryId: string}}) => {
  const { categoryId } = await params;
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
  );
  const data = await res.json();
  const categoryData: categoryDataType[] = data.data;
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="border-b-2 border-red-700 font-bold text-2xl">
        {data.title}
      </h1>

      <Link href={``}>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {categoryData.map((allData) => (
            <div key={allData.id} className="card bg-base-100 shadow-sm">
              <figure>
                <Image
                  width={500}
                  height={600}
                  alt={allData.imageAlt}
                  src={allData.imageUrl}
                />
              </figure>
              <div className="card-body">
                <p className="text-red-700 font-semibold">{allData.category}</p>
                <h2 className="card-title">{allData.title}</h2>
                <p>{allData.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default CategoryIdPage;
