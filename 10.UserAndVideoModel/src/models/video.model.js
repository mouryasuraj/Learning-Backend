import mongoose, {Schema} from 'mongoose'
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2'

const videoSchema = new Schema(
    {
        videoFile:{
            type:String,   //url will come from cloudinary
            required:true,
        },
        thumbnail:{
            type:String,//url will come from cloudinary
            required:true
        },
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        duration:{
            type:Number,  //url will come from cloudinary
            required:true
        },
        view:{
            type:Number,
            default:0
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
        },
        isPublished:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps:true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video", videoSchema)