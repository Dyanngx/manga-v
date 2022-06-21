import './App.css';
import Home from './component/Home/Home';
import Login from './component/Account/Login/Login';
import { Routes, Route} from "react-router-dom";
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
        <header className="App-header">
           <Navbar />
        </header>
        <body className='App-body'>
        <Routes>
            <Route exact path='/' element = {<Home/>} />
            <Route path='/login' element = {<Login/>} />
            {/* <Route path='/account' component = {Account} />
            <Route component = {NotFound} /> */}
          </Routes>
        </body>
        <footer className='App-footer'>
          <Footer />
        </footer>
    </div>
  );
}


export default App;
