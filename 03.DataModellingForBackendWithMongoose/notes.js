/*

1. Whenever you think about writing backend always think first what data we have to store.
2. Create folder models to create the models
3. then create models for example : todos
4. In this todos models we can create character like user.models.js, todos.models.js, sub_todos.models.js
5. In this file first import mongoose and then create schema example:
    import mongoose from 'mongoose';
    const userSchema = new mongoose.Schema({

    })
6. We have to export this scheme and it will create schema in mongodb
7. export const User = mongoose.model("")
8. mongoose.model("User", userSchema)  // it take two parameter first what model we have to create which is in string and second parameter is for what i have to create model.
9. Whatever we give in the model as a first parameter like "User" and when it connect to database then it convert into "users" in plural and lowercase form. This is how mongodb works.
10. Pass what data we need to send
    import mongoose from 'mongoose';
    const userSchema = new mongoose.Scheme({
        username: String,
        email: String,
        isActive: Boolean
    })
    This is not the best approach
11. 
        import mongoose from 'mongoose';

        const userSchema = new mongoose.Schema(
        {
            username: {
                typeof: String,
                required: true,
                unique: true,
                lowercase: true,
            },
            email: {
                typeof: String,
                required: true,
                unique: true,
                lowercase: true,
            },
            password: {
                typeof: String,
                required: true,
            },
        },
        {
            timestamps: true,
        }
        );

        export const User = mongoose.model('User', userSchema);
12.  mongoose timestamps:  https://mongoosejs.com/docs/timestamps.html

13. Learn more about mongoose from freeCodeCamp website : https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/ 

*/