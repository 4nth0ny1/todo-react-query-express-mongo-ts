"use server"

import { connectToDB } from "../mongoose"
import Todo from "../models/todo.model"

export async function getAllTodos() {
    connectToDB()

    const todoQuery = Todo.find()
    const todos = await todoQuery.exec()

    return todos;
}

interface Params {
    content: string,
    done: boolean
  }
  
  export async function createTodo({ content, done }: Params
  ) {
    try {
      connectToDB();
  
      const newTodo = await Todo.create({
          content, done
      });
  
    } catch (error: any) {
      throw new Error(`Failed to create todo: ${error.message}`);
    }
  }

  interface ToggleParams {
    _id: string;
    done: boolean;
  }

  export async function toggleTodo({ _id, done }: ToggleParams) {
    try {
      const todo = await Todo.findById(_id)
      todo.updateOne(done)
    } catch (error: any) {
      throw new Error(`Failed to toggle todo: ${error.message}`);
    }
  }
  