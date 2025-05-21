import { useState } from "react";
import { Header } from "./components";
import { Learning, Translation } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/learning" element={<Learning />} />
        <Route path="/translation" element={<Translation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
