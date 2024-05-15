import mongoose from 'mongoose';

const todoSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    subTodos:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"SubTodo"
      }
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

export const Todo = mongoose.model('Todo', todoSchema);
