import Suggest from "@models/suggest"
import { connectToDB } from "@utils/database"


export const POST = async(req,res) =>{
    const{suggest,tag,userId} = await req.json()
    try {
        await connectToDB()
        const newSuggest= Suggest.create({
            creator:userId,
            suggest,
            tag
        })

        await newSuggest.save()

        return new Promise(JSON.stringify(newPrompt),{status:200})

    } catch (error) {
        return new Promise('Failed to create suggest',{status:500})
    }
} 