import '../ImageDetail.css';
import React, {useState} from 'react';
import axios from 'axios';

const ImageDetail=(props)=>{
    const foundImage=props.imageData.find(image=>{
        console.log(image.id)
        console.log(props.match.params)
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

        const response= await axios.post('http://localhost:3002/images/all',data)
        console.log(response)

  }





    
    
return(
    <div className="image-detail-container">
        {foundImage ? (
            <div>
                  <form className="create-form-container" onSubmit={handleSubmit}>
                <input
                    name='title'
                    type='text'
                    placeholder='title'
                    value={state.title}
                    onChange={handleChange}
                />
                <input className="new-image-submit" type='submit' value='Update' />
            </form>
            </div>
        ):
       
            <h1>No Image found</h1>
        }
    </div>
    )
}

export default ImageDetail