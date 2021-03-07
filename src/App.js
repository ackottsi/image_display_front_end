import './App.css';
import { Component } from 'react';
import axios from 'axios';

 class App extends Component{
   constructor(props){
     super(props);
     this.state={
       images:[],
     };
   }

//   componentDidMount=()=>{
//     this.getCities();
//   }

// getCities= async ()=>{
//   const response= await axios.get("http://localhost:3001/city/all")

// this.setState({
//   cities: response.data
// });
// }


   render(){

    // const cities=this.state.cities.map(city=>{
    //   return(
    //     <div>
    //       <h3>{city.name}</h3>
    //       <img src={city.img} alt="city"/>
    //       <p>{city.state}, {city.country}</p>
    //     </div>

    //   )
    // })


  return (
    <div className="App">
    Verify App page is working
    </div>
    );
  }
 }
export default App;
