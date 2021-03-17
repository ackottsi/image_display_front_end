import React from 'react';
import '../HomePage.css';


function HomePage (props){
   

    console.log(props)

   
    if (props.loggedIn===true)
        return(  
            <div>
                    <div className="HomePage-Container">  
                   <h1>Hello {props.username}!</h1>   
                   <form>
                       <input type="submit" value="Log Out" onSubmit={props.logout} />
                   </form>              
                    </div>
            </div>
        )

    else{
        return(
            <div className="HomePage-Container">
               <h1>Please Login Above!</h1>
            </div>
        )
    }
}


export default (HomePage);