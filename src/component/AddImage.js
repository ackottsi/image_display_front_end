import React, {useState} from 'react';
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
        console.log(e.target)
        const {title,comments,url,date,value}=e.target;
        setState(prevState=>({
            ...prevState,          
            [title]:value,
            [comments]:value,
            [url]:value,
            [date]:value
        }))
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setState({title:state.title,
                  comments:state.comments,
                  url:state.url,
                  date:state.date
                })
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