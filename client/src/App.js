import { BrowserRouter,Routes,Route } from "react-router-dom";

import AddEdit from "./pages/AddEdit";
import Home from "./pages/Home";
import View from "./pages/View";
import About from "./pages/About";
import Header from "./components/Header";
import "./App.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (

      <div className="App">
            <Header />
<ToastContainer position="top-center"/>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/add" element={<AddEdit/>} />
          <Route path="/update/:id" element={<AddEdit/>} />
          <Route path="/view/:id" element={<View/>} />
          </Routes>

      </div>
  );
}

export default App;


//5.2.0