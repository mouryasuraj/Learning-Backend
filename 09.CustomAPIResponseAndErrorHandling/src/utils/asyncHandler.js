
// async handler function using promises
const asyncHandler = (func) => (req, res, next) => {
    Promise.resolve(func(req, res, next))
        .catch((error) => next(error))
}



// const asyncHandler = () => {}   // normal arrow function
// const asyncHandler = (func) => () => {}   // arrow function which takes function as a parameter which is known as higher order function.
// const asyncHandler = (func) => async () => {}   // arrow function which takes function as a parameter which is known as higher order function and also asynchronous.


//async handler function using try and catch
// const asyncHandler = (func) => async (req, res, next) => {
//     try {
//         await func(req,res,next)
//     } catch (err) {
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }


export { asyncHandler }