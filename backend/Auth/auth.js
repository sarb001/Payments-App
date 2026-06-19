import jwt from 'jsonwebtoken';

// validate the toke 

export const Authorization = (req,res,next) => {
    try {
        const token = req.headers.Authorization || req.headers.authorization ;
        console.log('token-',token);

        console.log('token type-' , typeof(token));
        
        const maintoken = token.split(" ")[1];
        console.log('main token-',maintoken);
        
        if(!token){
            return res.status(411).json({
                message : "User not  Authorized"
            })
        }                                                                                                            
        const Secretkey = "sarb@123";
        const verifyUser = jwt.verify(maintoken,Secretkey);
        console.log('Verify user-',verifyUser);
        req.user = verifyUser;
        next();

    } catch (error) {
        console.log('auth failed -',error);
         return res.status(500).json({
            message : "Authentication Failed"
         })   
    }
    // token validate

}