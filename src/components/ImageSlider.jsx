import { useState } from "react"
import './images.css'
import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from 'react-icons/bs'


export default function ImageSlider({imagesUrls}){
    
    const [imgIndex, setImgIndex] = useState(0)
    const [active, setActive] = useState(0)

    const nextImg = ()=>{
        setImgIndex((index) => {
            if(index === imagesUrls.length - 1){
                return index = 0;
            }
            return index + 1;
        })
        setActive((prev) => {
            if(prev === imagesUrls.length - 1){
                return prev = 0;
            }
            return prev + 1;
        })
        
    }
    const prevImg = ()=>{
        setImgIndex((index)=>{
            if(index === 0){
                return index = imagesUrls.length - 1;
            }
            return index - 1;
        })
        setActive((prev)=>{
            if(prev === 0){
                return prev = imagesUrls.length - 1;
            }
            return prev - 1;
        })
        
    }

  return (
    <section aria-label="Image slider" className="container">
        <div className="img-container">
            {imagesUrls.map(url => (
                <img key={url} src={url} alt='House image' style={{translate: `${-100 * imgIndex}%`}} />
            ))}
        </div>
        <button onClick={prevImg} className='arrow left' aria-label="View previous image">
            <BsFillArrowLeftSquareFill aria-hidden/>
        </button>
        <button onClick={nextImg} className='arrow right' aria-label="View next image">
            <BsFillArrowRightSquareFill aria-hidden/>
        </button>
        <div className="dots-container">
            {imagesUrls.map((_, index) => (
                <button key={index} onClick={() => {setImgIndex(index), setActive(index)}} className={active === index ? 'single-dot active' : 'single-dot'} aria-label={`View image ${index + 1}`}></button>
            ))}
        </div>
    </section>
  )
}

