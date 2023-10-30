import Suggest from "@models/suggest"
import { connectToDB } from "@utils/database"


export const POST = async(req,res) =>{
    const{suggest,tag,userId} = await req.json()
    try {
        await connectToDB()
        const newSuggest= Suggest({
            creator:userId,
            suggest,
            tag
        })
        await newSuggest.save()

        return new Promise(JSON.stringify(newSuggest),{status:200})

    } catch (error) {
        return new Promise(error.message,{status:500})
    }
} 