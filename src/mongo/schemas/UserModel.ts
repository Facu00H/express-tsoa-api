import { model, Schema } from "mongoose";
import { IUser } from "src/users/domain/interface/IUser";

const UserSchema = new Schema<IUser>({
  id: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Happy", "Sad"]
  },
  phoneNumbers: {
    type: [String],
    required: true,
  },
});

export const UserModel = model<IUser>("User", UserSchema);
