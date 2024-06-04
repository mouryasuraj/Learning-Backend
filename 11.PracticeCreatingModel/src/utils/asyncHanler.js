const asycnHandler = (func) => (req,res,next) =>{
     Promise.resolve(func(req,res,next))
     .catch(err => next(err))
} 


export {asycnHandler}