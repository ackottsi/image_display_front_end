import React from 'react';
import '../ImageDetail.css';

const ImageDetail=(props)=>{
   
    const foundImage=props.imageData.find(image=>{
        console.log(image.id)
        console.log(props.match.params)
        return image.id===parseInt(props.match.params.id)
    });
    
return(
    <div className="image-detail-container">
        {foundImage ? (
            <div>
                <h2>{foundImage.title}</h2>
                <img src={foundImage.url}/>
            </div>
        ):
       
            <h1>No Image found</h1>
        }
    </div>
    )
}

export default ImageDetail