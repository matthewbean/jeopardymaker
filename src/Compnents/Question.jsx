import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import QuestionContext from '../context/questionContext';

export default function Fullscreen(props) {
    const questionContext = useContext(QuestionContext);
    const { currentQuestion } = questionContext

    return (
    
        
            <Link to = "/answer" className = "fullscreen">
            <div className="center">
            { currentQuestion.question }
            </div>
            </Link>
     
    )
}
