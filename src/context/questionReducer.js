import {EDIT_CATEGORY, GO_FULLSCREEN,
        HANDLE_EDIT,
        RESET_BOARD,
        SAVE_EDIT,
        LOAD_GAME,
        UPLOAD_GAME} from './types'



export default function questionReducer(state, action){
    switch(action.type){
        case GO_FULLSCREEN:
            return{
                ...state,
                currentQuestion: action.payload.question,
                categories: state.categories.map(( item)=>{
                    if(item.categoryNum === action.payload.categoryNum) 
                    {
                        return({...item, questions: item.questions.map((quest)=> quest.id === action.payload.question.id? {...quest, answered: true}:{...quest})})
                    }
                    else{return{...item}}
                })
    }

        case HANDLE_EDIT:
            return{
                ...state,
                editor: state.editor.map(( item)=>{
                    if(item.categoryNum == action.payload.category) 
                    {
                        return({...item, questions: item.questions.map((quest)=> quest.id == action.payload.questionID? (action.payload.type == 'question'? {...quest, question: action.payload.value} : {...quest, answer: action.payload.value}):{...quest})})
                    }
                    else{return{...item}}
                })
            }
        case EDIT_CATEGORY:
            return{
                ...state,
                editor: state.editor.map(( item)=>(item.categoryNum == action.payload.categoryNum ? {...item, name: action.payload.value} : {...item}))
            }
        case SAVE_EDIT:
            return{
                ...state,
                categories: state.editor.map((item)=>({...item, questions: item.questions.map((quest)=>({...quest, answered: false})) }))            }
        case RESET_BOARD:
            return{
                ...state,
                categories: state.categories.map((item)=>({...item, questions: item.questions.map((quest)=>({...quest, answered: false})) }))
            }
        case LOAD_GAME:
            return{
                ...state,
                loadedFromMemory: true,
                categories: action.payload.map((item)=>({...item, questions: item.questions.map((quest)=>({...quest, answered: false})) })),
                editor: action.payload.map((item)=>({...item, questions: item.questions.map((quest)=>({...quest, answered: false})) }))
            }
        case UPLOAD_GAME:
            return{
                ...state,
                loadedFromMemory: true,
                categories: action.payload.map((item)=>({...item, questions: item.questions.map((quest)=>({...quest, answered: false})) })),
                editor: action.payload.map((item)=>({...item, questions: item.questions.map((quest)=>({...quest, answered: false})) }))
            }

        
        default:
            return state;
    }
}