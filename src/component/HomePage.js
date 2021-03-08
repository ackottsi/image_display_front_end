import React from 'react';

const HomePage = (props) => {
    console.log(props)


    const images=props.imageData.map(image=>{
        return(
          <div>
            <h3>{image.title}</h3>
            <img src={image.url} alt='picture of' />
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