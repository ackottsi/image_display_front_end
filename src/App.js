import './App.css';
import { Component } from 'react';
import axios from 'axios';
import HomePage from './component/HomePage'
import AddImage from './component/AddImage'
import ImageDetail from './component/ImageDetail'
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
  console.log(this.state.images)
this.setState({
  images: response.data,
  apiDataLoaded:true
});
}


deleteImage=async image=>{
  console.log(image.id)
 await axios.delete(`http://localhost:3002/images/${image.id}`)
 const images=this.state.images.filter(item=>item.id!==image.id);  //https://dev.to/moz5691/axios-in-reactjs-iah
                                                                   
 this.setState({images})
}
  
  
  


   render(){

  return (
    <div>
      {this.state.apiDataLoaded ?  
          <div className="App">

            <Switch>
                <Route exact path="/" render={(routerProps)=>(
                  <HomePage imageData={this.state.images} deleteImage={this.deleteImage} {...routerProps}/>
              )}/>
                <Route exact path="/AddImage" render={(routerProps)=>(
                  <AddImage imageData={this.state.images}  {...routerProps}/>
                )}/>
                 <Route exact path="/ImageDetail/:id" render={(routerProps)=>(
                  <ImageDetail imageData={this.state.images}  {...routerProps}/>
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
