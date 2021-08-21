import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import QuestionContext from '../../context/questionContext'
import EditorColumn from "./EditorColumn";
import save from "../../icons/save.svg"


export default function Board(props) {
    const questionContext = useContext(QuestionContext);
    const { goFullscreen, editor, handleEdits, saveEdits, editCategory, loadedFromMemory, loadGame } = questionContext;
    const game = localStorage.getItem("jeopardyGame")
    if (!loadedFromMemory && game) {
        loadGame(JSON.parse(game));
    }
    return (
        <>
                <nav>
                <Link to={'/'} onClick = {saveEdits}>
                <img src={save} alt="save" />
            </Link>
            </nav>

        <div className="edit-board">

{editor.map((item, i)=><EditorColumn editCategory = {editCategory} handleEdits = {handleEdits} category = {item} goFullscreen ={goFullscreen} categoryNum = {i} />)}   
        </div>
        </>
    )
}