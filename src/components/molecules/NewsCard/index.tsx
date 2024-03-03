'use client'
import Button from '@/components/atoms/Button'
import React from 'react'
import './style.scss'
import Image from 'next/image'

interface InewsCard {
img: string,
team: string,
date: string,
name: string,
title: string,
desc: string;
}
const NewsCard = ({img, team, date, name, title, desc}:InewsCard) => {
    return (
        <div className='newsCard-wrapper'>
            <div className=''>
                {/* <Image src={img} alt="" className='news-card-img' width={100} height={100} objectFit='cover'/> */}
                <img src={img} alt="nnews-card-img" />
            </div>
            <p className='creative'>{team}</p>
                <div className='date'>
                    <p>{date}</p>
                    <p>{name}</p>
                </div>
                <div className='running-remmote'>
                    <h3>{title}</h3>
                    <p className=' text-justify'>{desc}</p>
                </div>
                <div className='button-container'>
                    <Button title='Continue'/>
                </div>
        </div>
    )
}

export default NewsCard
