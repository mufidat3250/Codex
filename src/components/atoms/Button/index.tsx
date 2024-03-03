'use client'
import React from 'react'
import './button.css'

type buttonProps = {
    bgColor?: string | '#2657A4',
    title?:string,
    color?:string,
    btLeft?: string,
    bbLeft?: string

}
const Button = ({title = 'Try a live Demo', bgColor, color, btLeft, bbLeft}:buttonProps) => {
    return (
        <button type='submit' className='button-wrapper' style={{backgroundColor:bgColor, color:color, borderTopLeftRadius:btLeft, borderBottomLeftRadius:bbLeft}}>
            {title}
        </button>
    )
}

export default Button