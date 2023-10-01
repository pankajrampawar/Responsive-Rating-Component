import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RatingComponent from "./ratingComponent";
import ThanksComponent from "./thanksComponent";

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<RatingComponent/>}/>
        <Route path='/thanks/:rating' element={<ThanksComponent/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App;
