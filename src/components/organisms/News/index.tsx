'use client'
import NewsCard from '@/components/molecules/NewsCard'
import { news } from '@/lib/data'
import React from 'react'
import './style.scss'

const News = () => {
    return (
        <div className='news-wrapper container'>
            <h1>Lastest insights news</h1>
            <div className='news-container'>
                {news.map((n, index) => {
                    return <NewsCard img={n.img} team={n.team} date={n.date} name={n.name} title={n.title} desc={n.desc} key={`${index}`}/>
                })}
            </div>
        </div>
    )
}

export default News