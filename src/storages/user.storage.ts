import UserModel from "../models/user.model";

class UserStorage {
  private _model = UserModel;

  getAllUsers = async () => this._model.find();
  getUserByID = async (id: string) => this._model.findById(id);
  findByIdAndRemove = async (id: string) => this._model.findByIdAndRemove(id);
  updateUserByID = async (id: string, name: string, age: number) => {
    const updatedUser = await this._model.findByIdAndUpdate(
      id,
      { name, age },
      { new: true }
    );
    return updatedUser;
  };
}

export default UserStorage;
