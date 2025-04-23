import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>管理システム - メインページ (ポート4000)</h1>
        <p>
          ここがメインページです
        </p>
        <div>
          <a href="/auth" className="App-link">
            ログインページへ
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
