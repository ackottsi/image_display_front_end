import React from 'react';

import '../Login.css';


function HomePage (props){
   

    console.log(props)

   
    if (props.loggedIn===true)
        return(  
            <div>
                    <div className="HomePage-Container">  
                   Hello {props.username}!   
                   <form>
                       <input type="submit" value="Log Out" onSubmit={props.logout} />
                   </form>              
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