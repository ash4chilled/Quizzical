import React, {useEffect, useState} from 'react'
import { Quiz } from './quiz';

export const Card = () => {
    const hasWindow = typeof window !== 'undefined';

    const getWindowDimensions = () => {
        const width = hasWindow ? window.innerWidth : null;
        const height =  hasWindow ? window.innerHeight : null;
        return {'width' : width, 'height' : height}
    }
    

    const [currentWindow, setCurrentWindow] = useState(getWindowDimensions())
    const [quizStarted, setQuizStarted] = useState(false)
  

    const resetGame = () => {
        setQuizStarted(false)
    }

    useEffect(()=> {
        const watchWindow = () => {
            setCurrentWindow({
                'width' : window.innerWidth,
                'height' : window.innerHeight
            })
        }
        window.addEventListener('resize', watchWindow)

        return function(){
            window.removeEventListener('resize', watchWindow)
        }
    },[currentWindow])

    const pleaseStartQuiz = () => {
        setQuizStarted(true)
    }

    const styles = {
       width : (currentWindow.width/1.1),
       height : currentWindow.height/1.1
    }

    return(
        <div 
            className='drop-shadow-lg bg-template bg-cover flex flex-col flex-wrap items-center justify-center bg-alabaster p-10 rounded-sm'
            style = {styles} >
            {
                quizStarted 
                ? <Quiz resetGame = {()=> resetGame()} />
                :  
                <div className='flex  flex-col items-center text-d-grey'>
                    <h1 className='text-4xl'>Quizzical</h1>
                    <p>This is the quiz for your life...</p>
                    <div 
                        className='text-alabaster bg-grey py-2 px-7 rounded-sm my-5 hover:cursor-pointer'
                        onClick={pleaseStartQuiz}> 
                        Start Quiz 
                    </div>
                </div>
            }
            
        </div>
    )
}