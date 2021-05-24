import React from 'react';
import ReactDOM from 'react-dom';
import Covid from './Component/covid';
import './index.css';

const App = () => {
  return(
    <div>
      <Covid />
    </div>
  )
}
ReactDOM.render(<App />, document.querySelector("#root"));