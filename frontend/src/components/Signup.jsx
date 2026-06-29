import { Link } from "react-router-dom"


export const Signup = () => {
    return (
        <div className="bg-slate-300 h-[100vh] w-full flex justify-center ">

            <div className=" bg-white p-4 m-4 rounded-lg ">

                <div className="text-3xl font-bold flex justify-center"> Sign Up </div> 
                <div className="py-4 "> Enter your information to create an account </div>

                    <div>
                        <div>
                            <div> First Name </div>
                            <input type = "text"  value = ""  placeholder="John" 
                              className="border-2 border-black focus:border-0 my-2 rounded-md w-full"
                            />
                        </div>
                        <div className="py-4">
                            <div> Last Name </div>
                            <input type = "text"  value = ""  placeholder="Doe" 
                             className="border-2 border-black focus:border-0 my-2 rounded-md w-full"
                            />
                        </div>
                        <div>
                            <div> Email </div>
                            <input type = "text"  value = ""  placeholder="johndoe@example.com" 
                             className="border-2 border-black focus:border-0 my-2 rounded-md w-full"
                            />
                        </div>
                        <div className="py-4">
                            <div> Password </div>
                            <input type = "text"  value = ""  placeholder = "************"
                            className="border-2 border-black focus:border-0 my-2 rounded-md w-full"
                             />
                        </div>
                        <div className="flex w-full justify-center">
                            <button className="text-white bg-black px-32 py-[5px] rounded-md  "> Sign Up </button>
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