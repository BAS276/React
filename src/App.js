import  Affiche  from "./CV-PDF/Affiche";
import Form from "./CV-PDF/Form";
import Home from "./CV-PDF/Home";
import "./App.css"
import { BrowserRouter as Router, Route, Routes,useNavigate } from "react-router-dom";
function App() {
return (
<div className="App">

  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/Form" element={<Form/>}/> 
      <Route path="/Affiche" element={<Affiche />}/> 
    </Routes>
  </Router>
</div>
  );
}
export default App;