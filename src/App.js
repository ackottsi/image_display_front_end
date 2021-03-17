import './App.css';
import { Component } from 'react';
import axios from 'axios';
import Gallery from './component/Gallery'
import AddImage from './component/AddImage'
import ImageDetail from './component/ImageDetail'
import {Route, Switch, withRouter} from 'react-router-dom';
import Header from './component/Header'
import Signup  from './component/Signup'
import HomePage from './component/HomePage'
 class App extends Component{
   constructor(props){
     super(props);
     this.state={
       images:[],
       apiDataLoaded:false,
       username:'',
       password:'',
       userId:'',
       loggedIn:false,
       usernameSignUp:'',
       passwordSignUp:''
     };
   }

  
  componentDidMount=()=>{
    this.getImages();
  }


  

getImages= async ()=>{
  const response= await axios.get("http://localhost:3002/images/all")
this.setState({
  apiDataLoaded:true
});
}



getUser= async ()=>{
    const response= await axios.get(`http://localhost:3002/user/profile/${this.state.userId}`)
    this.setState({
        images: response.data.Images,
        apiDataLoaded:true
      })
};


deleteImage=async image=>{
 await axios.delete(`http://localhost:3002/images/${image.id}`)
 const images=this.state.images.filter(item=>item.id!==image.id);  //https://dev.to/moz5691/axios-in-reactjs-iah                                                           
 this.setState({images})
}
  

updateUserGallery=async()=>{
  const response= await axios.get(`http://localhost:3002/user/profile/${this.state.userId}`)
  this.setState({
    images: response.data.Images
  });
}


handleChange=(e)=>{
  e.preventDefault();
  const {name,value}=e.target;
  this.setState(prevState=>({
      ...prevState,          
      [name]:value
  }));
}


handleChangeSignUp=(e)=>{
  e.preventDefault();
  const {name,value}=e.target;
  this.setState(prevState=>({
      ...prevState,          
      [name]:value
  }));
}



userLogin=async (e)=>{
  e.preventDefault();

const data={
  username: this.state.username,
  password: this.state.password,
};



const response = await axios.post('http://localhost:3002/auth/login', data);
this.setState({userId:response.data.id, loggedIn:true});
this.getUser();
this.props.history.push('/');
};

logout=(e)=>{
  e.preventDefault();
  this.setState({loggedIn:false})
}

userSignup=async (e)=>{
  e.preventDefault();

  const data={
    username: this.state.usernameSignUp,
    password: this.state.passwordSignUp,
  };
  const response = await axios.post('http://localhost:3002/auth/signup', data);
  this.props.history.push('/')
};


render(){

  return (
    <div>
      {this.state.apiDataLoaded ?  
          <div className="App">

            <Header handleChange={this.handleChange} userLogin={this.userLogin}
                  username={this.state.username} password={this.state.password} userId={this.state.userId} />
                  
          <div className="main-body">
            <Switch>
            
            <Route exact path="/" render={(routerProps)=>(
                  <HomePage username={this.state.username} loggedIn={this.state.loggedIn}
                  logout={this.logout} {...routerProps}/>
              )}/>

              <Route exact path="/Signup" render={(routerProps)=>(
                  <Signup handleChangeSignUp={this.handleChangeSignUp} userSignup={this.userSignup}
                  usernameSignUp={this.state.usernameSignUp} passwordSignUp={this.state.passwordSignUp} userId={this.state.userId} {...routerProps}/>
              )}/>

               <Route exact path="/Gallery" render={(routerProps)=>(
                  <Gallery imageData={this.state.images} deleteImage={this.deleteImage} 
                  loggedIn={this.state.loggedIn} {...routerProps}/>
              )}/>

                <Route exact path="/AddImage" render={(routerProps)=>(
                  <AddImage imageData={this.state.images} userId={this.state.userId}
                  loggedIn={this.state.loggedIn} getImages={this.updateUserGallery}  {...routerProps}/>
                )}/>

                 <Route exact path="/ImageDetail/:id" render={(routerProps)=>(
                  <ImageDetail imageData={this.state.images} deleteImage={this.deleteImage} 
                  loggedIn={this.state.loggedIn} {...routerProps}/>
                )}/>
  
              </Switch>
             </div>

        </div>
      :
        <p>data not loaded</p>
      }
    </div>
      );
    }
  }
export default withRouter(App);
