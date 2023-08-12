import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    content: {
        type: String
    }, 
    done: {
        type: Boolean
    }
})

const Todo = mongoose.models.Todo || mongoose.model("Todo", todoSchema)

export default Todo;