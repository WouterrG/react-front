import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./scenes/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
