import Image from 'next/image';
import React from 'react';

const NewsDetailsPage = async ({ params }: { params: Promise<{ newsId: string }> }) => {
    const { newsId } = await params;
    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`)
    const data = await res.json()
    const news = data.data;
    console.log(news);

    return (
        <div>
            <h1>{news.title}</h1>
            <p>{news.text}</p>
        </div>
    );
};

export default NewsDetailsPage;