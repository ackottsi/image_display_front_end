import './App.css';
import { Component } from 'react';
import axios from 'axios';
import Gallery from './component/Gallery'
import AddImage from './component/AddImage'
import ImageDetail from './component/ImageDetail'
import {Route, Switch} from 'react-router-dom';
import Header from './component/Header'
import Signup  from './component/Signup'

 class App extends Component{
   constructor(props){
     super(props);
     this.state={
       images:[],
       apiDataLoaded:false,
       username:'',
       password:'',
       userId:'',
       loggedIn:false
     };
   }

  
  componentDidMount=()=>{
    this.getImages();
    this.getUser();
  }


  

getImages= async ()=>{
  const response= await axios.get("http://localhost:3002/images/all")
  console.log(response)
  console.log(this.state.images)
this.setState({
  // images: response.data,
  apiDataLoaded:true
});
}

getUser= async ()=>{
  console.log(this.state.loggedIn)
 
      console.log(this.state.userId)
      const response= await axios.get(`http://localhost:3002/user/profile/${this.state.userId}`)
      console.log(response)
      this.setState({
          images: response.data.Images,
          apiDataLoaded:true
        })
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
this.setState({userId:response.data.id, loggedIn:true})
this.getUser()
};



signUpUser





   render(){

  return (
    <div>
      {this.state.apiDataLoaded ?  
          <div className="App">

            <Header handleChange={this.handleChange} userLogin={this.userLogin}
                  username={this.state.username} password={this.state.password} userId={this.state.userId} />
                  

            <Switch>
              <Route exact path="/Signup" render={(routerProps)=>(
                  <Signup handleChange={this.handleChange} userLogin={this.userLogin}
                  username={this.state.username} password={this.state.password} userId={this.state.userId} />
              )}/>

               <Route exact path="/Gallery" render={(routerProps)=>(
                  <Gallery imageData={this.state.images} deleteImage={this.deleteImage} {...routerProps}/>
              )}/>
                <Route exact path="/AddImage" render={(routerProps)=>(
                  <AddImage imageData={this.state.images} userId={this.state.userId} {...routerProps}/>
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
