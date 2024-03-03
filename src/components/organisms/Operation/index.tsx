'use client'
import React from 'react'
import { operation } from '@/lib/data'
import './style.scss'
import PointerArrow from '@/app/Vectors/PointerArrow'
import Image from 'next/image'


const Operation = () => {
    return (
        <div className='operation-wrapper' id='services'>
            <div className='operation-image'>
                <div className='w-full h-full full-screen relative'>
                <Image src="/images/preview 1 (6).png" alt="" className='' objectFit='contain' layout='fill' />
                </div>
                <img src="/images/preview 1 (6).png" alt="" className='mobile-img'/>
                {/* <Image src={'/images/preview 1 (6).png'} layout='fill' alt='preview' className='mobile-img'/> */}
            </div>
            <div className='operation-desc'>
                <h1>It’s very helpful for operating system</h1>
                <div className='operation-option'>
                    {operation.map((op, index)=> <div className='option-wrapper' key={index} > 
                        <div>
                        <PointerArrow color={op.color}/>
                        </div>
                        <div className='ml- ml-6'>
                            <h3 className='text-[#060E1A]'>{op.title}</h3>
                            <p className='text-[#51565E] text-sm font-normal max-w-[22.937rem] mt-[0.625rem]'>{op.desc}</p>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Operation
