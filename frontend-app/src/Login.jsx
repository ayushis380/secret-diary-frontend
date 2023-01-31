import React, {useState} from "react";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    
    const handleSubmit = (e) =>{
        e.preventDefault(); // so that page doesn't load again and we don't lose our values
        console.log(email);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type ="email" placeholder="youremail@gmail.com" id="email" name="email"></input>
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type ="password" placeholder="********" id="password" name="password"></input>
                <button type ="submit">Log In</button>
            </form>
            <button>Don't have an account? Register here</button>
        </>
    )
}