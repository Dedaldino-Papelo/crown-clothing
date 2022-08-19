import './App.css';
import Homepage from './Pages/homepage/Homepage.components'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function Hats() {
  return (
    <>
     <h1>Hats</h1>
    </>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop/:id" element={<Hats />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
