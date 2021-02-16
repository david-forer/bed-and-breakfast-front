import React from 'react'

export default function Banner({ title, subtitle}) {
    return (
        <div className="text-center  p-8 bg-black bg-opacity-50 rounded-lg">
            
             <h1 className="text-white font-bold text-5xl ">{title}</h1>  
            
            <br></br>
            <p className="text-xl text-white font-bold capitalize">{subtitle}</p>
            {/* {children} */}
         </div>   
        
    )
}