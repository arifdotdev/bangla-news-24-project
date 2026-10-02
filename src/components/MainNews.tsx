import Image from 'next/image';
import React from 'react';

interface News {
    id: string
    title: string
    description: string
    category: string
    imageUrl: string
    imageAlt: string
}


const MainNews = ({news}: {news: News[]}) => {
    const [firstNews, ...restNews] = news;
    // const restNews = news.slice(1)

    return (
        <div className='flex gap-2'>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <Image
                        src={firstNews.imageUrl}
                        height={600}
                        width={600}
                        alt={firstNews.imageAlt} />
                </figure>
                <div className="card-body">
                    <p className='text-red-600 font-semibold'>{firstNews.category}</p>
                    <h2 className="card-title">{firstNews.title}</h2>
                    <p>{firstNews.description}</p>
                    <p></p>
                </div>
            </div>

            <div className='grid gap-2'>
                {restNews.slice(0,4).map(rn => <div key={rn.id} className='card bg-base-100 border border-gray-300 p-5'>
                    <p className='text-red-600 font-semibold'>{rn.category}</p>
                    <div>{rn.title}</div>
                </div>)}
            </div>
        </div>
    );
};

export default MainNews;