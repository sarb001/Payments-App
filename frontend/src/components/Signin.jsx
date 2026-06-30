import { useState } from "react"
import { Link } from "react-router-dom"


export const Signin = () => {

    const[inputvalue,setinputvalue] = useState({
        email  : "",
        password : ""
    })

    const Loginhandler = () => {
        console.log('login handler')
    }   

    return (
        <>
           <div className="bg-slate-300 h-[100vh] w-full flex justify-center ">

            <div className=" bg-white p-4 m-4 rounded-lg ">

                    <div className="text-3xl font-bold flex justify-center"> Sign In </div>  
                    <div className="py-4"> Enter your credentials to access your account </div>  
                    <div>
                        <div>
                                    <label> Email </label>
                                    <input type = "text"  value = {inputvalue.email || ""}  placeholder="johndoe@example.com"  
                                    onChange = {(e) => setinputvalue({
                                        ...inputvalue,
                                        email : e.target.value
                                    })}
                                    className="border-2 border-black  my-2 rounded-md w-full"
                                    />
                        </div>
                        <div className="py-4">
                                    <div> Password </div>
                                    <input type = "text"  value = {inputvalue.password || ""} 
                                      onChange = {(e) => setinputvalue({
                                        ...inputvalue,
                                        password : e.target.value
                                    })}
                                    placeholder = "************"
                                    className="border-2 border-black  my-2 rounded-md w-full"
                                    />
                        </div>
                            <div className="flex w-full justify-center">
                                    <button className="text-white bg-black px-32 py-[5px] rounded-md  "
                                     onClick={Loginhandler}>
                                         Sign In </button>
                            </div>
                                <div className="py-2">
                                    <span> Don't have an account?
                                        <Link to = "/signup" > Sign Up </Link> 
                                    </span>
                                </div>
                    </div>

            </div>

           </div>
        </>
    )
}