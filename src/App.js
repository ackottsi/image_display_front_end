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

  componentDidMount=()=>{
    this.getImages();
  }

getImages= async ()=>{
  const response= await axios.get("http://localhost:3002/images/all")
  console.log(response)
this.setState({
  images: response.data
});
}


   render(){

    const images=this.state.images.map(image=>{
      return(
        <div>
          <h3>{image.title}</h3>
          <img src={image.url} alt='picture of' />
        </div>

      )
    })


  return (
    <div className="App">
    {images}
    </div>
    );
  }
 }
export default App;
