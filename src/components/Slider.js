import React, { useState } from 'react'
import { SliderData } from '../data/photos'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <>
            <div className="mt-8">
            <h2 className="text-3xl font-bold text-center">Check out some local pictures</h2>
            </div>
            
        <section className='lg:mx-16 flex-column slider'>
            
            < FaArrowAltCircleLeft className="left-arrow " onClick={previousSlide} />
            < FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index} >
                        {index === current && (
                            <img src={slide.image} alt={slide.caption} className="image" />
                        )}
                    </div>
                )
            })}
            
            </section>
            </>
    )
    }

export default Slider