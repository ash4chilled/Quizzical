import React, { useEffect, useState } from 'react'

export const Answer = ({caption, correctAns, selected, incrementAns}) =>{
    
    const check = caption === correctAns
    const [wrongAns, setWrongAns] = useState(false)

    useEffect(()=>{
        if(selected){
            setWrongAns(caption !== correctAns)
            if(check) incrementAns()
        }

    },[])
    
    
    return(
        <div
            className={`font-semibold py-1 px-2 mr-4 mt-2 border-thin border-opBorder rounded-sm ${check ? 'bg-d-grey text-alabaster ' : wrongAns ? 'border-red bg-red text-alabaster' : '' }`}  >
                {caption}
        </div>
    )
}