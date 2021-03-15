import '../ImageDetail.css';
import React, {useState} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';


const ImageDetail=(props)=>{
    console.log(props.match.params)
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
        console.log(foundImage)
        const data={

            title:state.title,
            comments:state.comments,
            date:state.date
        }
        console.log(data)

       const res= await axios.put(`http://localhost:3002/images/${props.match.params.id}`,data)
        console.log(res)
        console.log("I ran")
        console.log(foundImage)
        const updatedData=res.data;
        setState({title:updatedData.title, comments:updatedData.comments, date:state.date, editImage:false});
      
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

    const displayDate=new Date(state.date);
    console.log(displayDate)

console.log(state.editImage)
  if (state.editImage===true){    
      console.log(state.title)
      
        return(
            
            <div className="image-detail-container">
                {foundImage ? (

                        <div className="page-container-edit">
                            <div className="left-side-container">      
                                <img src={foundImage.url} alt={foundImage.comments}/>
                            

                                
                             
                            </div>

                            <div className="right-side-container">
                                <div className="edit-detail-container">
                                        <form className="edit-form-container" onSubmit={handleEdit}>
                                            Picture Title:<input
                                                name='title'
                                                type='text'
                                                placeholder='title'
                                                value={state.title}
                                                defaultValue={foundImage.title}
                                                onChange={handleChange}
                                            /><br></br>

                                            Details:<input className="details-form"
                                                name='comments'
                                                type='text'
                                                placeholder='comments'
                                                value={state.comments}
                                                defaultValue={foundImage.comments}
                                                onChange={handleChange}
                                            /><br></br>
                                           Date:<input 
                                                name='date'
                                                type='date'
                                                placeholder='date'
                                                value={state.comments}
                                                defaultValue={foundImage.date}
                                                onChange={handleChange}
                                            /><br></br>
                                            <input className="edit-button" type='submit' name='' value='Update' />
                                        </form>
                                    </div> 
                                {/* <h3>{state.title}</h3>
                                <h4>{state.comments}</h4> */}
                            </div>
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
            
            
            <div>
                {foundImage ? (
                    <div className="page-container">
                        <div className="image-detail-container">
                            <div className="left-side-container">    
                                <img src={foundImage.url} alt={foundImage.comments}/> 
                            </div>
                            <div className="right-side-container">
                                <h3>{state.title}</h3>
                                <h4>{state.comments}</h4>
                                <h4>{state.date}</h4>
                                <button className="edit-button" onClick={()=>handleViewRender()}>EDIT</button>

                            </div>
                           
                        </div>
                    </div>    
                ):
            
                    <h1>No Image found</h1>
                }
            </div>
        )
    }
}


export default withRouter(ImageDetail)