import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import '../Login.css';


function Signup(props){
   

    console.log(props)

   
    
        return(  
            <div>
                    <div className="Login-Container">      
                        <form className="Login-Form"  onSubmit={props.userLogin}>
                            <label className="Login-Label" htmlFor="username">username</label>
                            <input className="Login-Input"
                                type="text"
                                name="username"
                                value={props.username}
                                onChange={props.handleChange}
                            />
                            <label className="Login-Label" htmlFor="password">Password</label>
                            <input className="Login-Input"
                                type="password"
                                name="password"
                                value={props.password}
                                onChange={props.handleChange}
                            />
                            <input 
                                className="Login-Submit" 
                                type="submit" 
                                value="Sign Up!"
                            />
                        </form>
                       
                    </div>
            </div>
        )
}


export default withRouter(Signup);