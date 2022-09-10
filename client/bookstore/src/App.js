import './App.css';
import {Route,Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
function App() {
  return (
    <div className="App">
     <Routes>
    
      <Route path="/" element={<><Navbar/><Homepage/></> } />

     </Routes>
    </div>
  );
}

export default App;
