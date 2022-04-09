import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Components from './pages/Components/Components';
import FormAuth from './pages/FormAuth/FormAuth';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Header ></Header>

        <Routes>
          <Route path="/" element={<Components />} />

          <Route path="/form-tab/*" element={<FormAuth />}>
            
          </Route>
        </Routes>
      </Router>
    );
  }
}

export default App;