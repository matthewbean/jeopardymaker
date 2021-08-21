import React from 'react';
import EditorTile from "./EditorTile"

export default function Boardcolumn({category, goFullscreen, categoryNum, handleEdits, editCategory}) {
    const {questions, name } = category;
    const handleEditCategory = (e)=>{
        let category = e.target.name.split('-')[1];
        editCategory(category, e.target.value)
    }
    return (
        <div className = 'column'>
        <div className="form-group category-number">
            <span>Category-{categoryNum + 1}</span>
            <input class="form-field" type="text" name = {`category-${categoryNum}`} value = {name} onChange = {(e) => handleEditCategory(e)} />
        </div>
        
         {questions.map((item, i)=><EditorTile handleEdits = {handleEdits} question = {item} goFullscreen = {goFullscreen} categoryNum = {categoryNum} />)}   
        </div>
    )
}
