import React from 'react';
import '../HomePage.css';

const HomePage = (props) => {
    console.log(props)


    const images=props.imageData.map(image=>{
        return(
          <div>
            <h3>{image.title}</h3>
            <img src={image.url} alt='test' />
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