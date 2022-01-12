import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './../header/header.js';
import News from '../news/news';
import Test from '../test/test';
import TodoApp from '../todo/todo';
import Kino from '../kino/kino';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/test" element={<Test />} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/films" element={<Kino />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
