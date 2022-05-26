import './App.css';
import Home from './component/Home/Home';
import Login from './component/Account/Login/Login';
import { Routes, Route} from "react-router-dom";
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
        <header className="App-header">
           <Navbar />
        </header>
          <Routes>
            <Route exact path='/' element = {<Home/>} />
            <Route path='/login' element = {<Login/>} />
            {/* <Route path='/account' component = {Account} />
            <Route component = {NotFound} /> */}
          </Routes>
    </div>
  );
}


export default App;
