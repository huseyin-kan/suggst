import Suggest from "@models/suggest"
import { connectToDB } from "@utils/database"


export const POST = async(req,res) =>{
    const{suggest,tag,userId} = await req.json()
    try {
        await connectToDB()

        const newSuggest= new Suggest({
            creator:userId,
            suggest,
            tag
        })
        await newSuggest.save()

        return new Response(JSON.stringify(newSuggest),{status:201})

    } catch (error) {
        return new Response('Failed to create new suggest',{status:500})
    }
} 