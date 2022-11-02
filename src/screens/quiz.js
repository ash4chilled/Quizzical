import React, {useEffect, useState} from 'react'

import { QuestionBox } from '../components/question-box'

export const Quiz = ({resetGame}) => {

    const [questions, setQuestions] = useState([])
    const [checkAnswers, setCheckAnswers] = useState(false)
    const [score, setScore] = useState(0)

    async function getQuestions (){
        await fetch('https://opentdb.com/api.php?amount=5&category=21&type=multiple')
        .then(response => response.json())
        .then(data => setQuestions(data.results))
    }

    useEffect( ()=>{
        getQuestions()
    },[])


    const incrementScore = ( )=>{
        setScore(prev=> prev + 1)
    }



    const questionElement = questions.map( (item) =>  
        <QuestionBox 
            key = {item.question} 
            question = {item}
            checkAnswers = {checkAnswers}
            incrementScore = {()=> incrementScore()} /> 
    )



    return(
        <div className='flex flex-col tracking-wide overflow-y-auto scrollbar'>
            {questionElement}

            <div className='flex justify-end pl-2 py-1 text-d-grey'>
               {
                    checkAnswers 
                    ?   <div className='flex flex-row items-center'>
                            <div className='font-bold pr-2'>No. of Correct answers : {score}</div> 
                            <div 
                                className='text-alabaster bg-op-grey px-3 py-1 rounded-sm hover: cursor-pointer'
                                onClick = {()=> resetGame()} > Play Again
                            </div>
                        </div>
                    :  <div 
                            className='text-alabaster bg-op-grey px-3 py-1 mr-1 rounded-sm hover: cursor-pointer' 
                            onClick = {()=> {setCheckAnswers(true);}}  >
                            Check Answers
                        </div>
                }

               

            </div>
        </div>
    )
}