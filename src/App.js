
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
      <Router>
        
        <Title />
      <Switch>
        <Route exact path = '/' component = {Board} />
        <Route exact path='/question' component = {Question} />
        <Route exact path='/answer' component = {Answer} />
        <Route exact path='/edit' component = {Editor} />
        <Route exact path='/upload' component = {Upload} />
      </Switch>
      </Router>
      </div>
    </QuestionState>
  );
}

export default App;
