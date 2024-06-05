import mongoose , {Schema} from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const userSchema = new Schema(
    {
        username:{
            type:String,
            unique:true,
            required:true,
            lowercase:true,
            trim:true,
            index:true
        },
        email:{
            type:String,
            unique:true,
            required:true,
            lowercase:true
        },
        fullName:{
            type:String,
            trim:true,
            required:true,
            index:true
        },
        password:{
            type:String,
            required:true
        },
        watchHistory:[
            {
                type:Schema.Types.ObjectId,
                ref:"Video"
            }
        ],
        avatar:{
            type:String,
            required:true
        },
        coverImage:{
            type:String
        },
        refreshToken:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    }
)

userSchema.pre('save', async function(next){
    if(this.isModified('password')) return next()
    this.password = bcrypt.hash(this.password, 10)
    return next()
}) 


userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function (){
    return jwt.sign(
        {
            _id:this._id,
            fullName:this.fullName,
            email:this.email
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id:this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}


export const User = mongoose.model("User", userSchema)