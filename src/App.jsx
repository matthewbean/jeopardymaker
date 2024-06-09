import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

import QuestionState from './context/QuestionState';
import Title from './Compnents/Title.jsx';
import Board from './Compnents/Board.jsx';
import Answer from './Compnents/Answer';
import Question from './Compnents/Question';
import Editor from './Compnents/editor/Editor'
import Upload from './Compnents/Upload';

function App() {


  return (
    <QuestionState>
      <div className="App">
        <Title />
      <Router>
        
      <Routes>
        <Route exact path = '/' element = {<Board/>} />
        <Route exact path='/question' element = {<Question />} />
        <Route exact path='/answer' element = {<Answer />} />
        <Route exact path='/edit' element = {<Editor />} />
        <Route exact path='/upload' element = {<Upload />} />
      </Routes>
      </Router>
      </div>
    </QuestionState>
  );
}

export default App
