import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import QuestionContext from '../context/questionContext'
import Boardcolumn from "./BoardColumn"
import refresh from "../icons/refresh.svg";
import edit from "../icons/edit.svg";
import upload from "../icons/upload.svg";
import download from "../icons/download.svg";



export default function Board(props) {
    const questionContext = useContext(QuestionContext);
    const { goFullscreen, categories, editor, resetBoard, loadGame, loadedFromMemory } = questionContext;
    const game = localStorage.getItem("jeopardyGame")
    if (!loadedFromMemory && game) {
        loadGame(JSON.parse(localStorage.getItem("jeopardyGame")));
    }
    const downloadFile = ()=>{
        const element = document.createElement("a");
        const file = new Blob([JSON.stringify(editor)], {type: 'text/plain'})
        element.href = URL.createObjectURL(file);
        element.download = "backup.txt";
        document.body.appendChild( element);
        element.click();
    }
    return (
        <>
        <nav>
            <Link to = '/edit' className = 'edit'>
                <img src={edit} alt="edit"/>
            </Link>
            
            <Link to = '/upload' className="upload" >
                <img src= {upload} alt="upload" />
            </Link>
            
            <button className="button download" onClick = {downloadFile}>
                <img src= {download} alt="download" />
            </button>
            <button className="button reset" onClick = {resetBoard}>
                <img src= {refresh} alt="refresh" />
            </button>
            </nav>
        <div className="board">
{categories.map((item, i)=><Boardcolumn key ={item.categoryNum} category = {item} goFullscreen ={goFullscreen} categoryNum = {i} />)}   
        </div>
        </>
    )
}
