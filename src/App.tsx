import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter/Counter';
import ToDoList from './TodoList ';
import ArticleList from './Article/ArticleList';
import {initialArticles} from './Article/initialArticle';
import ColorChanger from './ColorChanger/ColorChanger';
import ExternalDataComponent from './RandomQuote/RandomQuote';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>react jest_test</p>

        <Counter initialValue={0}/>
        <ToDoList/>
        <ArticleList articles={initialArticles}/>
        <ColorChanger/>
        <ExternalDataComponent/>
      </header>
    </div>
  );
}

export default App;
