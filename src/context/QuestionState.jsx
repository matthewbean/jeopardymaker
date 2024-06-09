import React, { useReducer } from 'react';
import questionReducer from './questionReducer';
import QuestionContext from './questionContext';
import {GO_FULLSCREEN,
        HANDLE_EDIT,
        EDIT_CATEGORY,
        SAVE_EDIT,
        RESET_BOARD,   
        LOAD_GAME,
        UPLOAD_GAME} from './types'

const QuestionState = props =>{

const initialState = {
  
        title: 'JEOPARDY',
        currentQuestion: '',
        loadedFromMemory: false,
        categories:[
        {
            categoryNum:0,
            name: 'Category',
            questions:[
                {question: 'this is the question', answer: 'this is the answer', value: 100, answered: false, id:1},
                {question: 'this is the question', answer: 'this is the answer', value: 200, answered: false, id:2},
                {question: 'this is the question', answer: 'this is the answer', value: 300, answered: false, id:4},
                {question: 'this is the question', answer: 'this is the answer', value: 400, answered: false, id:5},
                {question: 'this is the question', answer: 'this is the answer', value: 500, answered: false, id: 3}
            ]
        },
            {
                categoryNum:1,
            name: 'Category',
            questions:[
                {question: 'this is the question', answer: 'this is the answer', value: 100, answered: false, id: 6},
                {question: 'this is the question', answer: 'this is the answer', value: 200, answered: false, id: 7},
                {question: 'this is the question', answer: 'this is the answer', value: 300, answered: false, id: 8},
                {question: 'this is the question', answer: 'this is the answer', value: 400, answered: false, id: 9},
                {question: 'this is the question', answer: 'this is the answer', value: 500, answered: false, id: 10}
            ]
        },
        {
            categoryNum:2,
            name: 'Category',
            questions:[
                {question: 'this is the question', answer: 'this is the answer', value: 100, answered: false, id: 11},
                {question: 'this is the question', answer: 'this is the answer', value: 200, answered: false, id: 12},
                {question: 'this is the question', answer: 'this is the answer', value: 300, answered: false, id: 13},
                {question: 'this is the question', answer: 'this is the answer', value: 400, answered: false, id: 14},
                {question: 'this is the question', answer: 'this is the answer', value: 500, answered: false, id: 15}
            ]
        },
    {
        categoryNum:3,
            name: 'Category',
            questions:[
                {question: 'this is the question', answer: 'this is the answer', value: 100, answered: false, id: 16},
                {question: 'this is the question', answer: 'this is the answer', value: 200, answered: false, id: 17},
                {question: 'this is the question', answer: 'this is the answer', value: 300, answered: false, id: 18},
                {question: 'this is the question', answer: 'this is the answer', value: 400, answered: false, id: 19},
                {question: 'this is the question', answer: 'this is the answer', value: 500, answered: false, id: 20}
            ]
        },
        {
            categoryNum:4,
            name: 'Category',
            questions:[
                {question: 'this is the question', answer: 'this is the answer', value: 100, answered: false, id: 21},
                {question: 'this is the question', answer: 'this is the answer', value: 200, answered: false, id: 22},
                {question: 'this is the question', answer: 'this is the answer', value: 300, answered: false, id:23},
                {question: 'this is the question', answer: 'this is the answer', value: 400, answered: false, id: 24},
                {question: 'this is the question', answer: 'this is the answer', value: 500, answered: false, id: 25}
            ]
        }
    ],
    editor:[
        {
            categoryNum:0,
            name: 'Category',
            questions:[
                {question: 'this is the question', answer: 'this is the answer', value: 100, answered: false, id:1},
                {question: 'this is the question', answer: 'this is the answer', value: 200, answered: false, id:2},
                {question: 'this is the question', answer: 'this is t3he answer', value: 300, answered: false, id:4},
                {question: 'this is the question', answer: 'this is the answer', value: 400, answered: false, id:5},
                {question: 'this is the question', answer: 'this is the answer', value: 500, answered: false, id: 3}
            ]
        },
            {
                categoryNum:1,
            name: 'Category',
            questions:[
                {question: 'this is the question', answer: 'this is the answer', value: 100, answered: false, id: 6},
                {question: 'this is the question', answer: 'this is the answer', value: 200, answered: false, id: 7},
                {question: 'this is the question', answer: 'this is the answer', value: 300, answered: false, id: 8},
                {question: 'this is the question', answer: 'this is the answer', value: 400, answered: false, id: 9},
                {question: 'this is the question', answer: 'this is the answer', value: 500, answered: false, id: 10}
            ]
        },
        {
            categoryNum:2,
            name: 'Category',
            questions:[
                {question: 'this is the question', answer: 'this is the answer', value: 100, answered: false, id: 11},
                {question: 'this is the question', answer: 'this is the answer', value: 200, answered: false, id: 12},
                {question: 'this is the question', answer: 'this is the answer', value: 300, answered: false, id: 13},
                {question: 'this is the question', answer: 'this is the answer', value: 400, answered: false, id: 14},
                {question: 'this is the question', answer: 'this is the answer', value: 500, answered: false, id: 15}
            ]
        },
    {
        categoryNum:3,
            name: 'Category',
            questions:[
                {question: 'this is the question', answer: 'this is the answer', value: 100, answered: false, id: 16},
                {question: 'this is the question', answer: 'this is the answer', value: 200, answered: false, id: 17},
                {question: 'this is the question', answer: 'this is the answer', value: 300, answered: false, id: 18},
                {question: 'this is the question', answer: 'this is the answer', value: 400, answered: false, id: 19},
                {question: 'this is the question', answer: 'this is the answer', value: 500, answered: false, id: 20}
            ]
        },
        {
            categoryNum:4,
            name: 'Category',
            questions:[
                {question: 'this is the question', answer: 'this is the answer', value: 100, answered: false, id: 21},
                {question: 'this is the question', answer: 'this is the answer', value: 200, answered: false, id: 22},
                {question: 'this is the question', answer: 'this is the answer', value: 300, answered: false, id:23},
                {question: 'this is the question', answer: 'this is the answer', value: 400, answered: false, id: 24},
                {question: 'this is the question', answer: 'this is the answer', value: 500, answered: false, id: 25}
            ]
        }
    ]
    };
    const [state, dispatch] = useReducer(questionReducer, initialState);

    //go fullscreen
    const goFullscreen = (categoryNum, question)=>{
        dispatch({type: GO_FULLSCREEN, payload:{question, categoryNum}})
    }
    //handle edits
    const handleEdits = (type, category, questionID, value)=>{
        dispatch({type: HANDLE_EDIT, payload: {type, category, questionID, value}})

    }
    //Edit category
    const editCategory = ( categoryNum, value)=>{
        dispatch({type: EDIT_CATEGORY, payload: {categoryNum, value}})
    }

    //save edits
    const saveEdits = ()=>{
        localStorage.setItem("jeopardyGame", JSON.stringify(state.editor))
        dispatch({type: SAVE_EDIT})
    }
    //get save game
    const loadGame = (game)=>{
        dispatch({type: LOAD_GAME, payload: game})
    }
    //reset board
    const resetBoard = ()=>{
        dispatch({type: RESET_BOARD})
    }
    const uploadGame = (game)=>{
        localStorage.setItem("jeopardyGame", game);
        dispatch({type: UPLOAD_GAME, payload: JSON.parse(game)})
    }
    return(
        <QuestionContext.Provider
        value = {{
            title: state.title,
            currentQuestion: state.currentQuestion,
            categories: state.categories,
            editor: state.editor,
            loadedFromMemory: state.loadedFromMemory,
            goFullscreen,
            handleEdits,
            editCategory,
            saveEdits,
            loadGame,
            resetBoard,
            uploadGame
        }}>
            {props.children}
        </QuestionContext.Provider>

        
    )

}



export default QuestionState