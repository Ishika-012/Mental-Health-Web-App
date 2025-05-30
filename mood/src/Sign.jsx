import React, {useState} from 'react'
import authService from './appwrite/auth'
import {Link ,useNavigate} from 'react-router-dom'
import {login} from './store/authSlice'
import Button from "./component/Button"
import Inputbox from "./component/Inputbox.jsx"
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'

function Signup() {
    // const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const create = async(data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData));
                // navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className="login">
        <div class="moodie">
            <h1>MOODLIFT</h1>
             <p>Change Your Life</p>
        </div>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`} id='signin'>
            
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up </h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                       Log In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Inputbox
                           className="input"
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: true,
                        })}
                        />
                        <Inputbox
                         className="input"
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
                        <Inputbox
                        className="input"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: true,})}
                        />
                       <Link to='/login'><Button type="submit" className="w-full btn" >
                            Create Account
                        </Button></Link>
                    </div>
                </form>
            </div>

    </div>
  )
}

export default Signup