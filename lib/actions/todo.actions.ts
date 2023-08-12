"use server"

import { connectToDB } from "../mongoose"
import Todo from "../models/todo.model"

export async function getAllTodos() {
    connectToDB()

    const todoQuery = Todo.find()
    const todos = await todoQuery.exec()

    return todos;
}