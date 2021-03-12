import '../ImageDetail.css';
import React, {useState} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';


const ImageDetail=(props)=>{
    const foundImage=props.imageData.find(image=>{
        return image.id===parseInt(props.match.params.id)
    });
    const[state,setState]=useState({
        title:foundImage.title,
        comments:foundImage.comments,
        url:foundImage.url,
        date:foundImage.date,
        editImage:false
    })



    const handleChange=(e)=>{
       
        e.preventDefault()
        console.log(state.title)
        console.log(e.target)
        const {name,value}=e.target;
        setState(prevState=>({
            ...prevState,          
            [name]:value
        }))
    }

       const handleEdit= async (e)=>{
        e.preventDefault();
        console.log(props)
        const data={
            title:state.title
            // comments:state.comments,
            // url:state.url,
            // date:state.date
        }
        console.log(data)

       const res= await axios.put(`http://localhost:3002/images/${foundImage.id}`,data)
        console.log(res)
        const updatedData=res.data;
        console.log(state.title)
        setState({title:updatedData.title,editImage:false});
      
        // props.history.push(`/ImageDetail/${foundImage.id}`)

  }


    const handleViewRender=()=>{
        // const response= await axios.get(`http://localhost:3002/images/${foundImage.id}`)
            // console.log(response)
            // const data=response.data          
        console.log("edit button test")
        // console.log(state.title)
        setState({editImage:true})
    }

console.log(state.editImage)
  if (state.editImage===true){    
      console.log(state.title)
      
        return(
            
            <div className="image-detail-container">
                {foundImage ? (
                    <div className='edit-detail-container'>
                       <h3>{state.title}</h3>
                    
                        <img src={foundImage.url} alt={foundImage.comments}/>
                            <form className="edit-form-container" onSubmit={handleEdit}>
                                Picture Title:<input
                                    name='title'
                                    type='text'
                                    placeholder='title'
                                    value={state.title}
                                    onChange={handleChange}
                                />
                                <input className="new-image-submit" type='submit' name='' value='Update' />
                            </form>
                    </div>
                ):
            
                    <h1>No Image found</h1>
                }
            </div>
        )
    }

    else{
        console.log(state.title)
        return(
            
            
            <div className="image-detail-container">
                {foundImage ? (
                    <div className="image-detail-container">

                       <h3>{state.title}</h3>
                       <img src={foundImage.url} alt={foundImage.comments}/>
                       <button className="edit-button" onClick={()=>handleViewRender()}>EDIT</button>
                       <h4>{foundImage.comments}</h4>
                    </div>
                ):
            
                    <h1>No Image found</h1>
                }
            </div>
        )
    }
}


export default withRouter(ImageDetail)