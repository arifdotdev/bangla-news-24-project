import NewsCard from '@/components/NewsCard';
import React from 'react';

const CategoryNews = async({params}) => {
    const {categoryId} = await params;
    
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`)
    const data = await res.json()
    const categoriesNews = data.data;


    return (
        <div>
            <h1 className='text-2xl font-bold border-b-2 border-gray-700 mb-5'>{data.title}</h1>

            <div>
                {categoriesNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)}
            </div>

        </div>
    );
};

export default CategoryNews;