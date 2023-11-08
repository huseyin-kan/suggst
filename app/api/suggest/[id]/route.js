import Suggest from "@models/suggest"
import { connectToDB } from "@utils/database"

//GET
export const GET = async(request,{params}) =>{
    try {
        
        await connectToDB()

        const suggest = await Suggest.findById(params.id).populate('creator')

        if(!suggest) return new Response('Suggest not found',{status:404})

        return new Response(JSON.stringify(suggest),{status:200})

    } catch (error) {
        return new Response('Failed to fetch suggest',{status:500})
    }
}

//PATCH
export const PATCH = async (req,{params}) =>{
    const {suggest,tag} = await req.json()
    try {
        await connectToDB()

        const existingSuggest = await Suggest.findById(params.id)
        if(!existingSuggest) return new Response('Suggest not found',{status:404})

        existingSuggest.suggest = suggest
        existingSuggest.tag = tag

        await existingSuggest.save()

        return new Response(JSON.stringify(existingSuggest),{status:200})
        
    } catch (error) {
        return new Response('Failed to patch suggest',{status:500})
    }
}

//DELETE

export const DELETE = async (req,{params}) => {
    try {
        await connectToDB()

        await Suggest.findByIdAndRemove(params.id)

        return new Response('Suggest removed successfully',{status:200})
    } catch (error) {
        return new Response('Failed to remove suggest',{status:500})
    }
}