import jwt from 'jsonwebtoken';

// validate the toke 

export const Authorization = (req,res) => {
    try {
        const token = req.headers.Authorization || req.headers.authorization ;
        
        if(!token){
            return res.status(411).json({
                message : "User not  Authorized"
            })
        }                                                                                                            
        const Secretkey = "sarb@123";
        const verifyUser = jwt.verify(token,Secretkey);
        console.log('Verify user-',verifyUser);
    
    } catch (error) {
         return res.status(500).json({
            message : "Authentication Failed"
         })   
    }
    // token validate

}