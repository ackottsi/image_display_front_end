import React from 'react';
import {withRouter} from 'react-router-dom'
import '../Login.css';


function Signup(props){
        return(  
            <div>
                    <div className="Login-Container">  
                    
                        <form className="Login-Form"  onSubmit={props.userSignup}>
                            
                            <label className="Login-Label" htmlFor="username">username</label>
                            <input className="Login-Input"
                                type="text"
                                name="usernameSignUp"
                                value={props.usernameSignUp}
                                onChange={props.handleChangeSignUp}
                            />
                            <label className="Login-Label" htmlFor="password">Password</label>
                            <input className="Login-Input"
                                type="password"
                                name="passwordSignUp"
                                value={props.passwordSignUp}
                                onChange={props.handleChangeSignUp}
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