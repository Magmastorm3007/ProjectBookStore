import './App.css';
import {Route,Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import BookPost from './components/BookPost';
function App() {
  return (
    <div className="App"> 
     <Routes>
    
      <Route path="/" element={<><Navbar/><Homepage/><BookPost/></> } />

     </Routes>
    </div>
  );
}

export default App;
