import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Counter from './components/Counter';
import reportWebVitals from './reportWebVitals';

class Title extends React.Component {

  render() {
    const {name, surname} = this.props;
    return <h1>Hello {name} {surname}</h1>;
  }
}

let name = 'John'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Counter count={0}/>
      </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
