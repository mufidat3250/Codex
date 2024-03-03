import React, { ReactNode } from 'react'
import './featuresCard.scss'
import Image from 'next/image'

interface IFeaturesCard {
    title: string;
    desc: string;
    img: string;
    bgColor: string
}

const FeaturesCard = ({title, desc, img, bgColor}:IFeaturesCard) => {
    return (
        <div className='features-style'>
                <div className='iconwrapper' style={{backgroundColor:bgColor}}>
                    {/* <img src={img} alt=""/> */}
                    <Image src={img} width={70} height={70} alt={'features'}/>
                </div>
                <div>
                    <h3>{title}</h3>
                    <p className='desc'>{desc}</p>

                    <div className='pointer'>
                    <img src="/vectors/Group 9.svg" alt="" />
                    </div>
                </div>
        </div>
    )
}

export default FeaturesCard