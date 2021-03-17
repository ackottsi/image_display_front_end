import '../ImageDetail.css';
import React, {useState} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';


const ImageDetail=(props)=>{
    const foundImage=props.imageData.find(image=>{
        return image.id===parseInt(props.match.params.id)
    });

    //https://stackoverflow.com/questions/46228846/how-to-format-javascript-date-to-mm-dd-yyyy
    //used for formatting date on image detail page
    let date=new Date(foundImage.date);
    let newDate=(date.getMonth() + 1) + '/' + (date.getDate()+1) + '/' +  date.getFullYear();

    const[state,setState]=useState({
        title:foundImage.title,
        comments:foundImage.comments,
        url:foundImage.url,
        date:newDate,
        editImage:false
    })

    const handleChange=(e)=>{
        e.preventDefault()
        const {name,value}=e.target;
        setState(prevState=>({
            ...prevState,          
            [name]:value
        }))
    }

    const handleEdit= async (e)=>{
        e.preventDefault();
        let date=new Date(state.date);
        let newDate=(date.getMonth() + 1) + '/' + (date.getDate()+1) + '/' +  date.getFullYear();    
        const data={
            title:state.title,
            comments:state.comments,
            date:newDate
        }
        const res= await axios.put(`http://localhost:3002/images/${props.match.params.id}`,data)
        const updatedData=res.data;
        setState({title:updatedData.title, comments:updatedData.comments, date:newDate, editImage:false})
    }


    const handleViewRender=()=>{
        setState({editImage:true})
    }


        if (state.editImage===true){    
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
                                            Date Taken:<input 
                                                    name='date'
                                                    type='date'
                                                    placeholder='date'
                                                    value={state.comments}
                                                    onChange={handleChange}
                                                /><br></br>
                                                <input className="edit-button" type='submit' name='' value='Update' />
                                            </form>
                                        </div> 
                                </div>
                            </div>
                    ):
                
                        <h1>No Image found</h1>
                    }
                </div>
            )
        }

        else{
            return(
                <div>
                    {foundImage ? (
                        <div className="page-container">
                            <div className="image-detail-container">
                                <div className="left-side-container">    
                                    <img src={foundImage.url} alt={foundImage.comments}/> 
                                </div>
                                <div className="right-side-container">
                                    <h4 className="detail-body"><span className="detail-title">Title:</span> {state.title}</h4>
                                    <h4 className="detail-body"><span className="detail-title">Memory:</span> {state.comments}</h4>
                                    <h4 className="detail-body"><span className="detail-title">Date:</span> {state.date}</h4>
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