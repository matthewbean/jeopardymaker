import React from 'react';
import Boardtile from "./BoardTile"

export default function Boardcolumn({category, goFullscreen, categoryNum}) {
    const {questions, name } = category;
    
    return (
        <div className = 'column'>
        <h3 className="category-title">{name}</h3>
         {questions.map((item, i)=><Boardtile key ={`${categoryNum}-${item.id}`} question = {item} goFullscreen = {goFullscreen} categoryNum = {categoryNum} />)}   
        </div>
    )
}
