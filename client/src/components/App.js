import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewRecipeForm from "./NewRecipeForm";
import NavBar from "./NavBar"


function App() {
  return (
    <div>
        <p>
          Hello World!
        </p>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/addrecipe" element={<NewRecipeForm/>}>
            </Route>
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
