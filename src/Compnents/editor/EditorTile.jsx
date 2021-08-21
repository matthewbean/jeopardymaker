import React from 'react'

export default function Boardtile({ question, handleEdits, categoryNum }) {
    const { value, answer, id} = question;
    const editQuestion = (e)=>{
        let [type, category, questionID] = e.target.name.split('-');
        handleEdits( type, category, questionID, e.target.value)
    }
    return (
        <div className="edit-tiles">
            <div class="form-group">
    <span>question-{value}</span>
    <input class="form-field" type="text" name = {`question-${categoryNum}-${id}`} value = {question.question} onChange = {(e) => editQuestion(e)}/>
</div>
<div class="form-group">
    <span>answer-{value}</span>
    <input class="form-field" type="text"  name = {`answer-${categoryNum}-${id}`} value = {answer} onChange = {(e) => editQuestion(e)}/>
</div>

        
        </div>
    )
}
