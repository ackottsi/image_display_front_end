import React from 'react';
import '../ImageDetail.css';

const ImageDetail=(props)=>{
    console.log(props)
    const foundImage=props.imageData.find(image=>{
        return image.id===props.match.params.id
    });
    
return(
    <div className="image-detail-container">
        {foundImage ? (
            <div>
                This is the image detail page
            </div>
        ):
       
            <h1>No Image found</h1>
        }
    </div>
    )
}

export default ImageDetail