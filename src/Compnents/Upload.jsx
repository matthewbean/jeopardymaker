import React, { useContext, useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';

import home from '../icons/home.svg';   


import QuestionContext from '../context/questionContext';

export default function Upload(props) {
    const questionState = useContext(QuestionContext);
    const { uploadGame } = questionState;
    const initialState = {
        file: null,
        value: null
    }

    const [state, setstate] = useState(initialState);


    const navigate = useNavigate()

    const handleUpload = (e)=>{
        setstate({...state, file: e.target.files[0]})
    }

    function uploadFile() {
        if(state.file){
        var reader = new FileReader();
        reader.onload = function(evt) {
            let fileName = document.getElementById("upload").value
            if (fileName.substring(fileName.length-3, fileName.length) === "txt") {
                uploadGame(evt.target.result);
                navigate('/');
            } else {
                alert('please enter a valid file');
                document.getElementById("upload").value = null;
            }
        };
        reader.readAsText(state.file);
    }
      }
   
    return (
        <>
        <nav>
        <Link to = '/' className = "home">
            <img src={home} alt="home"/>
        </Link>

           
            </nav>

           <input id = "upload" type="file"  onChange = {(e) => handleUpload(e)}/> 
            <button className = "upload-file" onClick = {uploadFile}>
                Submit
            </button>
        </>
    )
}
