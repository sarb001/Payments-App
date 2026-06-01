import zod from 'zod';

const UserZodSchema = zod.object({
     email : zod.string(),
     firstname : zod.string(),
     lastname : zod.string(),
     password : zod.string(),
})


export default UserZodSchema;