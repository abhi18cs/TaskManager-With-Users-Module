import TodoModel from "../models/todo.model";

class TodoStorage {
  private _model = TodoModel;

  getAllTodos = async (userId: string) => this._model.find({ userId });

  getTodoByID = async (userId: string, todoId: string) =>
    this._model.findOne({ _id: todoId, userId });

  removeTodoByID = async (userId: string, todoId: string) =>
    this._model.findOneAndRemove({ _id: todoId, userId });

  updateTodoByID = async (
    userId: string,
    todoId: string,
    text: string,
    completed: boolean
  ) => {
    const updatedTodo = await this._model.findOneAndUpdate(
      { _id: todoId, userId },
      { text, completed },
      { new: true }
    );
    return updatedTodo;
  };
}

export default TodoStorage;
