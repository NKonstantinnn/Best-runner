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

    public static async updateTraining(userId: mongoose.Types.ObjectId, training: Training): Promise<Training> {
      const { activity, date, distance, comment } = training;
      await UserModel.updateOne(
        { _id: userId, 'trainings._id': training._id },
        { $set: { 
            'trainings.$.activity': activity,
            'trainings.$.date': date,
            'trainings.$.distance': distance,
            'trainings.$.comment': comment 
          } 
        },
      );
      return training;
    }

    public static async deleteTraining(userId: mongoose.Types.ObjectId, trainingId): Promise<mongoose.Types.ObjectId> {
      await UserModel.update(
        { _id: userId },
        { $pull: {'trainings': { _id: trainingId } } }
      );
      return trainingId;
    }
}
  
export default TrainingService;
