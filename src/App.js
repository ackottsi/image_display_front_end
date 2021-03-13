import './App.css';
import { Component } from 'react';
import axios from 'axios';
import HomePage from './component/HomePage'
import AddImage from './component/AddImage'
import ImageDetail from './component/ImageDetail'
import {Route, Switch} from 'react-router-dom';
import Header from './component/Header'
import Login  from './component/Login'

 class App extends Component{
   constructor(props){
     super(props);
     this.state={
       images:[],
       apiDataLoaded:false,
       username:'',
       password:'',
       userId:''
     };
   }

  componentDidMount=()=>{
    this.getImages();
    this.getUser();
  }


  

getImages= async ()=>{
//   const response= await axios.get("http://localhost:3002/images/all")
//   console.log(response)
//   console.log(this.state.images)
// this.setState({
//   images: response.data,
//   apiDataLoaded:true
// });
}

getUser= async ()=>{
  const response= await axios.get(`http://localhost:3002/user/profile/1`)
  console.log(response)
  this.setState({
      images: response.data.Images,
      apiDataLoaded:true
    });
};


deleteImage=async image=>{
  console.log(image.id)
 await axios.delete(`http://localhost:3002/images/${image.id}`)
 const images=this.state.images.filter(item=>item.id!==image.id);  //https://dev.to/moz5691/axios-in-reactjs-iah
                                                                   
 this.setState({images})
}
  


handleChange=(e)=>{
  e.preventDefault()
  const {name,value}=e.target;
  this.setState(prevState=>({
      ...prevState,          
      [name]:value
  }))
}


userLogin=async (e)=>{
  e.preventDefault();

const data={
  username: this.state.username,
  password: this.state.password,
};

console.log(data);
const response = await axios.post('http://localhost:3002/auth/login', data);
console.log(response);
const userId=this.state.userId
this.setState({userId:response.data.id})
};


  
  


   render(){

  return (
    <div>
      {this.state.apiDataLoaded ?  
          <div className="App">

            <Header/>

            <Switch>
              <Login handleChange={this.handleChange} userLogin={this.userLogin}
                username={this.state.username} password={this.state.password} userId={this.state.userId} />
                <Route exact path="/" render={(routerProps)=>(
                  <HomePage imageData={this.state.images} deleteImage={this.deleteImage} {...routerProps}/>
              )}/>
                <Route exact path="/AddImage" render={(routerProps)=>(
                  <AddImage imageData={this.state.images}  {...routerProps}/>
                )}/>
                 <Route exact path="/ImageDetail/:id" render={(routerProps)=>(
                  <ImageDetail imageData={this.state.images} deleteImage={this.deleteImage}  {...routerProps}/>
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
