import * as mongoose from 'mongoose';

import UserModel, { User } from '../models/UserModel';
import { Training } from '../models/TrainingModel';

class TrainingService {
    public static async addTraining(userId: mongoose.Types.ObjectId, training): Promise<Training> {
        const dbUser: User = await UserModel
          .findByIdAndUpdate(userId, { $push: {trainings: training} }, {new: true})
          .lean();

        return dbUser.trainings.pop();
    }

    public static async getTrainings(userId: mongoose.Types.ObjectId): Promise<Training[] | null> {
        const dbUser = await UserModel
          .findById(userId)
          .select({ trainings: true, _id: false })
          .lean();

        return dbUser ? dbUser.trainings : null;
    }
}
  
export default TrainingService;
