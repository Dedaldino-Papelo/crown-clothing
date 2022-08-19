import './App.css';
import Homepage from './Pages/homepage/Homepage.components'
import Shop from './Pages/Shops/Shop.component';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/header.component';


function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
