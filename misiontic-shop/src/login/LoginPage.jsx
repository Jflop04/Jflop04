import React, { Fragment, useState } from 'react';
import './loginStyles.css';

function LoginPage() {
    
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [calcular,setCalcular] = useState(0)
    const calculate = () =>{
        setCalcular(parseInt(email) + parseInt(password))
    }
    return (
        <Fragment>
            <div className="container">
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    <label for="floatingPassword">Password</label>
                </div>
                <button type="button" className="btn btn-primary" onClick={calculate}>Iniciar sesión</button>
                <h1>{calcular}</h1>          
            </div>
        </Fragment>
    )
}

export default LoginPage;


