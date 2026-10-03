import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface MarqueeType{
    id: number,
    title: string
}
const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const headerData:MarqueeType[] = data.data;

  return (
    <div className="bg-red-700 text-white">
      <div className="flex w-11/12 mx-auto py-1.5">
        <p className="bg-red-800 text-white font-bold">সর্বশেষ</p>
        <MarqueeText direction="right" duration={11}>
          {headerData.map((head) => (
            <span key={head.id}>
              <span>{head.title}</span>
              <span className="mx-3">•</span>
            </span>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
