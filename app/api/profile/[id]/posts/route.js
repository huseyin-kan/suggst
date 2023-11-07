import Suggest from "@models/suggest"
import { connectToDB } from "@utils/database"


export const GET = async (req,{params}) =>{
    try {
        await connectToDB()

        const suggests = await Suggest.find({creator:params.id}).populate('creator')

        return new Response(JSON.stringify(suggests),{status:200})

    } catch (error) {
        return new Response('Failed to fetch user',{status:500})
    }
}