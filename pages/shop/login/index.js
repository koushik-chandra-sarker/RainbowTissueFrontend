import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {isLoggedIn, login} from "../../../services/login/Action";
import {useDispatch, useSelector} from "react-redux";
import {Alert, CircularProgress} from "@mui/material";
import classnames from 'classnames'
import {useRouter} from "next/router";
const Index = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    useEffect(() => {
        dispatch(isLoggedIn())
    },[dispatch])
    const loggedIn = useSelector(store => store.IsLoggedIn)

    useEffect(()=>{
        if (loggedIn){
            router.push("/shop/cart")
        }
    },[loggedIn])
    const [showPass, setShowPass] = useState(false)
    const [loginInfo, setLoginInfo] = useState({
        username:'',
        password: ''
    });
    const [showLoading, setShowLoading] = useState(false)
    const [error, setError] = useState({
        status: false,
        message:''
    })
    function handleLogin(e) {
        e.preventDefault();
        setShowLoading(true)
        setLoginInfo({...loginInfo, username: e.target.username.value, password: e.target.password.value})
        login({username: e.target.username.value, password: e.target.password.value}).then(r => {
                if (r.loggedIn === true) {
                    setShowLoading(false)
                    dispatch(isLoggedIn())
                    router.push('/shop/cart')
                }else {
                    setShowLoading(false)
                    setError({...error, status: true, message: r.message})
                }
            }
        )
    }

    return (
        <div>
            {/* form wrapper */}
            <div className="w-11/12 sm:w-3/4 mx-auto py-16 ">
                <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden relative">
                    <div  className={classnames( !showLoading? 'hidden':"", `absolute top-0 left-0 right-0 bottom-0 bg-gray-300 blurry_bg flex justify-center items-center`)}>
                        <CircularProgress className={'z-50'}/>
                    </div>
                    {
                        error.status?
                            <Alert className={'mb-5'}  variant="filled" severity="error">{error.message}</Alert>
                            :<></>
                    }
                    <h2 className="text-2xl uppercase font-medium mb-1">
                        LOGIN
                    </h2>
                    <p className="text-gray-600 mb-6 text-sm">
                        Login if you are a customer
                    </p>
                    <form onSubmit={handleLogin}>
                        <div className="space-y-4">
                            <div>
                                <label className="text-gray-600 mb-2 block">
                                    Phone Number <span className="text-primary">*</span>
                                </label>
                                <input type="text" id="username" name="username" required placeholder={'Ex: 017XXXXXXXX'}
                                       className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                        focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                        px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                            <div className={'relative'}>
                                <label htmlFor={'password'} className="text-gray-600 mb-2 block">Password <span className="text-primary">*</span></label>
                                <input type={showPass ? "text" : 'password'} id="password" name="password" placeholder={'********'} required
                                       className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                        focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                        px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                <div
                                    className="absolute top-10 inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                                <span
                                                    className={classnames(showPass ? 'hidden' : '', "material-icons cursor-pointer")}
                                                    onClick={() => {
                                                        setShowPass(true)
                                                    }}
                                                >
                                                    visibility
                                                </span>
                                    <span
                                        onClick={() => {
                                            setShowPass(false)
                                        }
                                        }
                                        className={classnames(!showPass ? 'hidden' : '', "material-icons cursor-pointer")}>
                                                    visibility_off
                                                </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-6">
                            <a href="#" className="text-primary">Forgot Password?</a>
                        </div>
                        <div className="mt-4">
                            <button type="submit" className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
                                Login
                            </button>
                        </div>
                    </form>
                    <p className="mt-4 text-gray-600 text-center">
                        Don&#39;t have an account? <Link href={'/shop/register'}><a className="text-primary">Register Now
                    </a></Link>
                </p>
                </div>
            </div>
            {/* form wrapper end */}

        </div>
    );
};

export default Index;