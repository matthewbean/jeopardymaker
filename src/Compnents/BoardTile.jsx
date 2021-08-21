import React from 'react'
import { Link } from 'react-router-dom'

export default function Boardtile({ question, goFullscreen, categoryNum }) {
    const { value, answered } = question;
    const chooseQuestion = ()=>{
        goFullscreen(categoryNum, question)
    }
    return (
        <Link to = "/question" className = 'tile' onClick = {()=>chooseQuestion()}>
            {!answered && value}
        </Link>
    )
}
