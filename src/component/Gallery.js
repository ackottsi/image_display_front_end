import React, {useState} from 'react';
import '../Gallery.css';
import {Link, withRouter} from 'react-router-dom'


const Gallery = (props) => {

  const[state,setState]=useState({
  removeImage:false,
  deleteButtonValue:"Enable Delete"
})

 const handleRemoveRender=(e)=>{
   e.preventDefault();
   if(state.removeImage===true){
      setState({removeImage:!state.removeImage, deleteButtonValue:"Enable Delete"})
   }
   else{      
     setState({removeImage:!state.removeImage, deleteButtonValue:"Disable Delete"})
   }
 
}

 

  if (props.loggedIn===false){ 
    return(
        <div className="HomePage-Container">
            <h1>Please Login Above!</h1>
        </div>
      )
  }

  else{
    const images=props.imageData.map((image,index)=>{
        if(state.removeImage===true){

            return(
              <div className="homepage-image-container" key={image.id}>
                <Link to={`/ImageDetail/${image.id}`}>
                  <img src={image.url} alt='test' />
                </Link>
                  <button className="delete-button" id={image.id} onClick={()=>props.deleteImage(image)}>x</button>
              </div>
      
            )
          }

        else{
          return(
              <div className="homepage-image-container" key={image.id}>

              <Link to={`/ImageDetail/${image.id}`}>
                <img src={image.url} alt='test' />
              </Link>
            </div>
          )
        }

    })  
      

    return(

      <div className="page-container-with-toggle-button">
               <form onSubmit={handleRemoveRender}>
              <input className="remove-toggle" type="submit" value={state.deleteButtonValue}/>
            </form>
        <div className="HomePage">
     
            {images}
        </div>
      </div>


    );
  }
}

export default withRouter(Gallery);