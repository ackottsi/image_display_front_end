import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import '../Login.css';


function Login(props){
   

    console.log(props)

   
    
        return(  
            <div>
                {props.userId
                ?
                    <h3 className="Signed-In">Welcome {props.username}!</h3>
                :
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
                                value="Login!"
                            />
                        </form>
                        <div className="Register-Link">
                            <h4 className="Signup-Here">Not a user?<br/>Sign up<br></br> {<Link to="/Register"> Here</Link>}</h4>
                        </div>
                    </div>}
            </div>
        )
}


export default withRouter(Login);