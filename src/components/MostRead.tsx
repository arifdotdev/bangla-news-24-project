
interface IMostReadNews {
    id: string
    title: string
}

const MostRead = async() => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read')
    const data = await res.json()
    const news: IMostReadNews[] = data.data;

    return (
        <div className='card p-2 bg-base-100 border-gray-300'>
            <h2 className='font-bold text-red-700 mb-2'>সর্বাধিক পঠিত </h2>
            <div className='grid gap-3'>
                {
                    news.map((n, index) => <div key={n.id} className='flex gap-2 items-center'>
                        <span className='text-xl font-bold text-red-600'>{index+1}</span><h3>{n.title}</h3>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MostRead;