import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";

interface IRestSection {
  curationId: string
  title: string
  articles: {
    id: string
    title: string
    description: string
    category: string
    imageUrl: string
    imageAlt: string
  }[];
}

export default async function Home() {
  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections')
  const data = await res.json()
  const sections = data.data;
  const mainNews = sections[0].articles

  const restSections: IRestSection[] = sections.slice(1)
  // console.log(restSections);

  return (
    <div >
      <Marquee></Marquee>
      <div className="grid grid-cols-3  gap-5 mt-5">
        {/* news section */}
        <div className="col-span-2">
          <MainNews news={mainNews}></MainNews>
          <div className="grid gap-5 mt-5">
            {
              restSections.map(rs => <div className="" key={rs.curationId}>
                <h1 className="font-bold text-xl border-b-2 mb-3 border-red-700 pb-1">{rs.title}</h1>
                <div className="grid grid-cols-3 gap-2">
                  {
                    rs.articles.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                  }
                </div>
              </div>)
            }
          </div>
        </div>

        {/* most read section */}
        <div className="col-span-1">
          <MostRead></MostRead>
        </div>
      </div>
    </div>
  );
}
