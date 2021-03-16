import React from 'react';

import '../Login.css';


function HomePage (props){
   

    console.log(props)

   
    if (props.loggedIn===true)
        return(  
            <div>
                    <div className="HomePage-Container">  
                    
                   Hello {props.username}!
                    
                    </div>
            </div>
        )

    else{
        return(
            <div>
                No User Logged In
            </div>
        )
    }
}


export default (HomePage);