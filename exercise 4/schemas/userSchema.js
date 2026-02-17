import { z} from "zod"

export const CreateUserSchema = z.object({
    name: z.string().min(1,'name is require'),
    email: z.string().email('email must be valid'),
    password: z.string() .
    min(6 ,'password must be as least 6 character')
    .max(100, 'password be as least 100 character')
})

