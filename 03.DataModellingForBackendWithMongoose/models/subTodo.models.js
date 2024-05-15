import mongoose from 'mongoose';

const subTodoSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    completed: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

export const SubTodo = mongoose.model('SubTodo', subTodoSchema);
