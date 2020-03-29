import React from 'react';
import './App.css';


const Skill = (props) => (
  <div className="skill-block">
    <dl className="values">
      <dt>Rating</dt>
      <dd>{props.rating}</dd>
      <dt>Fifth Rating</dt>
      <dd>{Math.round(props.rating / 5)}</dd>
      <dt>Half Rating</dt>
      <dd>{Math.round(props.rating / 2)}</dd>
    </dl>
  </div>
);

const Difficulty = (props) => (
  <div className="difficulty-block">
    <dl className="values">
      <dt>Critical Success</dt>
      <dd>{props.rating + Math.round(props.rating / 2)}</dd>
      <dt>Rating</dt>
      <dd>{props.rating}</dd>
      <dt>Critical Failure</dt>
      <dd>{Math.round(props.rating / 5)}</dd>
      <dt>Success</dt>
      <dd>{props.rating + Math.round(props.rating / 5)}</dd>
      <dt>Failure</dt>
      <dd>{Math.round(props.rating / 2)}</dd>
    </dl>
  </div>
);

function App() {
  return (
    <div className="app">
      <header>
        <h1>RPG Tools</h1>
      </header>
      <main className="row">
        <div className="col">
          <h3>Skill Check</h3>
          <div className="row">
            <Skill rating={35} />
            <Difficulty rating={80} />
          </div>
        </div>
        <div className="col">
          <h3>Opposed Skill Check</h3>
          <div className="row">
            <Skill rating={35} />
            <Difficulty rating={80} />
            <Skill rating={27} />
          </div>
        </div>
      </main>
      <footer>&copy; 2020 mononoke-home.com</footer>
    </div>
  );
}

export default App;
