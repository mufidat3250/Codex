'use client'
import FeaturesCard from '@/components/molecules/FeaturesCard'
import React from 'react'
import './style.scss'
import { features } from '@/lib/data'


const Features = () => {
    return (
        <div className='feature-wrapper'>
            <h1>We Provides best Feature for customar</h1>
            <div className='features-cards'> 
                {
                    features.map(({title, desc, img, bgColor}, index)=> {
                        console.log(title)
                        return <FeaturesCard title={title} desc={desc} img={img} bgColor={bgColor} key={`features-${index}`}/>
                    })
                }
            </div>
        </div>
    )
}

export default Features
