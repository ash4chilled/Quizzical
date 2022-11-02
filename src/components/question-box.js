import React, { useState}  from 'react'
import {nanoid} from 'nanoid'

import { Option } from './option'
import { Answer } from './answers'

export const QuestionBox = ({question, checkAnswers, incrementScore}) => {

    const [options, setOptions] = useState(getOptions())

    const changeSelection = (id) => { 
        setOptions(prev => 
            prev.map(option => option.id === id 
                                ? {...option, selected : !option.selected} 
                                : {...option, selected : false}
                    )
        )
    }

    function getOptions(){
        const randomNumber = Math.floor((Math.random() * 4))
        var newOptions = []

        for(let i = 0, j=0 ; i<=question.incorrect_answers.length; i++){
            newOptions[i] ={
                id       : nanoid(),
                selected : false,
                caption  : (i === randomNumber)
                            ? question.correct_answer
                            : question.incorrect_answers[j]
            }
            if(i !== randomNumber) j++
        }  
        return newOptions
    }


    return(
        <div className='border-b-thin border-d-alabaster py-2 text-d-grey'>
            <h1 className='text-xs'>{question.question}</h1>
            <div className='mx-3 text-op flex flex-row py-1 flex-wrap'>
                {options.map(option=> 
                    checkAnswers 
                    ? <Answer 
                        key = {option.id} 
                        caption = {option.caption}
                        selected = {option.selected}
                        correctAns = {question.correct_answer}
                        incrementAns = {() => incrementScore()}
                         />

                    : <Option 
                        key = {option.id} 
                        caption = {option.caption}
                        selected = {option.selected}
                        changeSelection = {() => changeSelection(option.id)} />)
                }    
            </div> 
        </div>

    )
}