import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import '../AddImage.css';

//URL to Heroku deployed server
const URL="https://image-display-ack-app.herokuapp.com"


function AddImage(props){
    const[state,setState]=useState({
        title:'',
        comments:'',
        url:'',
        date:'',
        userId:props.userId
    })


    const handleChange=(e)=>{
        e.preventDefault()
        const {name,value}=e.target;
        setState(prevState=>({
            ...prevState,          
            [name]:value
        }))
    }

       const handleSubmit=async (e)=>{
        e.preventDefault();
        const data={
            title:state.title,
            comments:state.comments,
            url:state.url,
            date:state.date,
            userId:props.userId
          }
        setState(data)

    const response= await axios.post(`${URL}/images/postimage`,data)
          props.getImages()
          props.history.push('/Gallery')
        }


    if (props.loggedIn===false){ 
        return(
            <div className="HomePage-Container">
                <h1>Please Login Above!</h1>
            </div>
        )
    }

    else{
        return(

            <div className="AddImage">

        
                <form className="create-form-container" onSubmit={handleSubmit}>
                    <input
                        name='title'
                        type='text'
                        placeholder='title'
                        value={state.title}
                        onChange={handleChange}
                    />
                    <input
                        name='comments'
                        type='text'
                        placeholder='comments'
                        value={state.comments}
                        onChange={handleChange}
                    />
                    <input
                        name='url'
                        type='text'
                        placeholder='url'
                        value={state.url}
                        onChange={handleChange}
                    />
                    <input
                        name='date'
                        type='date'
                        placeholder='date'
                        value={state.date}
                        onChange={handleChange}
                    />
                    <input className="new-image-submit" type='submit' value='Add Image' />
                </form>

                
            </div>
        );
    }
}

export default withRouter(AddImage);