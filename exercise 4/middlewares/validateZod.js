

export const validateZod = (schema) => (req,res,next) => {

    const result = schema.safeParse(req.body);

    if(!result.success) {
    
        const formatted = result.error.format()
console.log("reaslt", result)
console.log(Object.keys(formatted))

        return res.status(400).json({
            success:false,
            message:"validation failed",
            errors: Object.keys(formatted).map(field => ({
                field,
                message: formatted[field]?._errors?.[0] || 'invalid input'
            }))

            


        })

        


    }

    next()

}