import { useState } from "react"
import { Link } from "react-router-dom" ;
import axios from 'axios';

export const Signup = () => {

    const[valuename,setvaluename] = useState({
         firstname : "",
         lastname : "",
         email : "",
         password : ""
    });

    const Signuphandler = async() => {
         const {firstname , lastname , email , password } = valuename;
         console.log('all input data -',{firstname , lastname , email , password });
          if(!firstname || !lastname || !email || !password){
              console.log('Enter  all Fields.')
          }

          try {   
              const Mainuser = await axios.post('http://localhost:3000/api/v1/user/signup',{
                 firstname,lastname,email , password
              });
              console.log('main user created -',Mainuser);

            } catch (error) {
                console.log(' error new user ', error);
            
            }
    }

    return (
        <div className="bg-slate-300 h-[100vh] w-full flex justify-center ">

            <div className=" bg-white p-4 m-4 rounded-lg ">

                <div className="text-3xl font-bold flex justify-center"> Sign Up </div> 
                <div className="py-4 "> Enter your information to create an account </div>

                    <div>
                        <div>
                            <label>  First Name </label>
                            <input type = "text"   value = {valuename.firstname || ""}
                             onChange = {(e) =>  setvaluename({
                                  ...valuename,
                                  firstname : e.target.value,
                             }) }
                             placeholder="John" 
                              className="border-[2px] border-black  my-2 rounded-md w-full"
                            />
                        </div>
                        <div className="py-4">
                            <label>  Last Name  </label>
                            <input type = "text"  value = {valuename.lastname || ""}   
                             onChange={(e) => setvaluename({
                                 ...valuename,
                                 lastname : e.target.value
                             })}
                             placeholder="Doe" 
                             className="border-2 border-black  my-2 rounded-md w-full"
                            />
                        </div>
                        <div>
                            <label> Email  </label>
                            <input type = "text"   value = {valuename.email || ""}   
                             onChange={(e) => setvaluename({
                                 ...valuename,
                                 email : e.target.value
                             })}
                               placeholder="johndoe@example.com" 
                             className="border-2 border-black  my-2 rounded-md w-full"
                            />
                        </div>
                        <div className="py-4">
                            <label>  Password </label> 
                            <input type = "text"    value = {valuename.password || ""}   
                               onChange={(e) => setvaluename({
                                 ...valuename,
                                 password : e.target.value
                               })}
                            placeholder = "************"
                            className="border-2 border-black  my-2 rounded-md w-full"
                             />
                        </div>
                        <div className="flex w-full justify-center">
                            <button onClick={Signuphandler} className="text-white bg-black px-32 py-[5px] rounded-md  ">
                                 Sign Up 
                            </button>
                        </div>
                        <div className="py-2">
                            <span> Already have an account?
                                <Link to = "/signin" > Login </Link> 
                             </span>
                        </div>
                    </div>

            </div>

        </div>
    )
}