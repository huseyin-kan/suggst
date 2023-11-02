import Suggest from "@models/suggest"
import { connectToDB } from "@utils/database"

export const GET = async (request) =>{
    try {
        await connectToDB()
        
        const suggests = await Suggest.find({}).populate('creator')

        return new Response(JSON.stringify(suggests),{status:200})
    } catch (error) {
        return new Response('Failed to fetch suggests', { status:500 })
    }
}