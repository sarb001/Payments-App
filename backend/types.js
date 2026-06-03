import zod from 'zod';

export const UserZodSchema = zod.object({
     email : zod.string().email(),
     firstname : zod.string(),
     lastname : zod.string(),
     password : zod.string(),
})


export const LoginzodSchema = zod.object({
     email : zod.string().email(),
     password : zod.string(),
})
