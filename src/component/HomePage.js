import React from 'react';
import '../HomePage.css';

const HomePage = (props) => {
    console.log(props)


    const images=props.imageData.map((image,index)=>{

        return(
          <div key={image.id}>
            <h3>{image.title}</h3>
            <img src={image.url} alt='test' />
            <button id={image.id} onClick={()=>props.deleteImage(image.id)}>DELETE</button>
          </div>
  
        )
      })

    return(

        <div className="HomePage">
            {images}
        </div>
    );
}

export default HomePage;