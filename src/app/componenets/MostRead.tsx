interface MostReadNewsType{
      id: string,
      title: string,
}

const MostRead = async() => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read');
    const data = await res.json();
    const allData: MostReadNewsType[] = data.data
    console.log(allData);
    return (
        <div className="border card border-gray-300 pl-4">
          <h2 className="font-bold text-xl pt-4">সর্বাধিক পঠিত</h2>
            {
                allData.map((datas, ind) => (
                    <div key={datas.id} className="flex items-baseline gap-2">
                        <span className="text-red-600 text-lg font-bold">{ind+1}</span>
                        <p className="py-2 font-bold">{datas.title}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default MostRead;