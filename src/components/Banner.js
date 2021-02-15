import React from 'react'

export default function Banner({ title, subtitle}) {
    return (
        <div className="banner text-center px-4">
            
             <h1 className="text-white font-bold text-5xl p-2">{title}</h1>  
            
            <br></br>
            <p className="text-xl text-white font-bold capitalize">{subtitle}</p>
            {/* {children} */}
         </div>   
        
    )
}