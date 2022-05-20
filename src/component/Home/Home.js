import React, { Component} from 'react'
import Navbar from '../Navbar/Navbar'

class Home extends Component{
    render(){
        return(
            <div className="App">
                 <header className="App-header">
                    <Navbar />
                </header>
                <div>Homepage</div>
            </div>
        )
    }

}
export default Home