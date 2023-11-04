import User from "@models/user"
import { connectToDB } from "@utils/database"


export const GET = async (req,{params}) =>{
    try {
        await connectToDB()

        const user  = User.find({creator:params.id}).populate('creator')

        return new Response(JSON.stringify(user),{status:200})

    } catch (error) {
        return new Response('Failed to fetch user',{status:500})
    }
}