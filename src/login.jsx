import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from './store/authSlice.js'
import Button from "./component/Button"
import Inputbox from "./component/Inputbox.jsx"
import {useDispatch} from "react-redux"
import authService from "./appwrite/auth"
import {useForm} from "react-hook-form"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async(data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className="login">
   
    <div className="moodie">
    <h1>MOODLIFT</h1>
     <p>Change Your Life</p>
</div>
        <div id="signin">
        
        <h2 >Log In</h2>
        <p >
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup">
                        Sign Up
                    </Link>
        </p>
        {error && <p >{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div >
                <Inputbox className="input"
             
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Inputbox className="input"
               
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
                />
                <Link to="/"><Button 
                type="submit"
                className="w-full btn"
                >Log in</Button></Link>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login