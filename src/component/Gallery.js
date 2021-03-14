import React from 'react';
import '../Gallery.css';
import {Link} from 'react-router-dom'

const Gallery = (props) => {
    console.log(props)


    const images=props.imageData.map((image,index)=>{

        return(
          <div className="homepage-image-container" key={image.id}>
            {/* <h3>{image.title}</h3> */}
            <Link to={`/ImageDetail/${image.id}`}>
              <img src={image.url} alt='test' />
            </Link>
              <button id={image.id} onClick={()=>props.deleteImage(image)}>x</button>
          </div>
  
        )
      })

    return(

        <div className="HomePage">
            {images}
        </div>
    );
}

export default Gallery;