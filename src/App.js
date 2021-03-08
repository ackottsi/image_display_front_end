import './App.css';
import { Component } from 'react';
import axios from 'axios';
import HomePage from './component/HomePage'
import {Route, Switch} from 'react-router-dom';

 class App extends Component{
   constructor(props){
     super(props);
     this.state={
       images:[],
       apiDataLoaded:false
     };
   }

  componentDidMount=()=>{
    this.getImages();
  }

getImages= async ()=>{
  const response= await axios.get("http://localhost:3002/images/all")
  console.log(response)
this.setState({
  images: response.data,
  apiDataLoaded:true
});
}


   render(){

    


  return (
    <div>
      {this.state.apiDataLoaded ?  
          <div className="App">

            <Switch>
                <Route exact path="/" render={(routerProps)=>(
                  <HomePage imageData={this.state.images} {...routerProps}/>
              )}/>
              </Switch>

        </div>
      :
        <p>data not loaded</p>
      }
    </div>
      );
    }
  }
export default App;
