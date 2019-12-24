import { Typegoose, prop, arrayProp } from 'typegoose';
import * as mongoose from 'mongoose';

import { Training } from './TrainingModel';

export class User extends Typegoose {
  public _id: mongoose.Types.ObjectId;

  @prop({ required: true })
  public username: string;

  @prop({ required: true })
  public password: string;

  @prop({ required: true, default: new Date() })
  public signUpDate: Date;

  @arrayProp({ items: Training })
  public trainings?: Training[];
};

const UserModel = new User().getModelForClass(User);

export default UserModel;
