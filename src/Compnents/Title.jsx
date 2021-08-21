
import React, { useContext } from 'react';
import QuestionContext from '../context/questionContext';
export default function Title(props) {
    
    const questionContext = useContext(QuestionContext);
    const {title} = questionContext;
    return (
        <h1>
            {title}
        </h1>
    )
}
