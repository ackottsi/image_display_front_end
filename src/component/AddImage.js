import React, {useState} from 'react';
import axios from 'axios';
import '../AddImage.css';


function AddImage(props){
    console.log(props)
    const[state,setState]=useState({
        title:'',
        comments:'',
        url:'',
        date:''
    })


    const handleChange=(e)=>{
        e.preventDefault()
        console.log(e.target)
        const {name,value}=e.target;
        setState(prevState=>({
            ...prevState,          
            [name]:value
        }))
    }

       const handleSubmit= async (e)=>{
        e.preventDefault();
        const data={
            title:state.title,
            comments:state.comments,
            url:state.url,
            date:state.date
          }
        setState(data)

    const response= await axios.post('http://localhost:3002/',data)
          console.log(response)

    }




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

export default AddImage;