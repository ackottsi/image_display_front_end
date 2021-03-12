import React, {useState} from 'react';
import {Link, withRouter} from 'react-router-dom'
import '../Login.css';
import axios from 'axios'


function Login(props){
    const [state, setState]=useState({
        username:'',
        password:'',
        loggedIn:false
    })

    //followed the example from caseybook
    //along with using the following url from medium:
    //https://medium.com/technoetics/create-basic-login-forms-using-react-js-hooks-and-bootstrap-2ae36c15e551

    const handleChange=(e)=>{
        e.preventDefault()
        const {name,value}=e.target;
        setState(prevState=>({
            ...prevState,          
            [name]:value
        }))
    }





    const userLogin=async (e)=>{
        e.preventDefault();
    
    const data={
        username: state.username,
        password: state.password
    };

    console.log(data);
    const response = await axios.post('http://localhost:3002/auth/login', data);
    console.log(response);
  };
    
        return(  
            <div>
                {state.loggedIn
                ?
                    <h3 className="Signed-In">Welcome {state.username}!</h3>
                :
                    <div className="Login-Container">      
                        <form className="Login-Form"  onSubmit={userLogin}>
                            <label className="Login-Label" htmlFor="username">username</label>
                            <input className="Login-Input"
                                type="text"
                                name="username"
                                value={state.username}
                                onChange={handleChange}
                            />
                            <label className="Login-Label" htmlFor="password">Password</label>
                            <input className="Login-Input"
                                type="password"
                                name="password"
                                value={state.password}
                                onChange={handleChange}
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