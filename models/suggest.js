import { Schema, model, models } from "mongoose";

const SuggestSchema = new Schema({
    creator:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    suggest:{
        type:String,
        required:[true,'Suggest is required']
    },
    tag:{
        type:String,
        required:[true,'Tag is required']
    }
})

const Suggest = models.Suggest || model('Suggest',SuggestSchema)

export default Suggest