import React  from 'react'

export const Option = ({caption, selected, changeSelection}) => {
    return(
        <div 
            className={`font-semibold py-1 px-2 mr-4 mt-2 border-thin border-opBorder rounded-sm hover: cursor-pointer ${selected ? 'bg-op-grey text-alabaster' : 'text-op-grey'}`}
            onClick = {()=> changeSelection()} >
            {caption}
        </div>
    )
}