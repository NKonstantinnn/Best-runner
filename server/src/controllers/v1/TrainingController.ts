import { Request, Response, NextFunction } from 'express';
import passport from '../../middlewares/Passport';
import * as VError from 'verror';
import BaseController from '../BaseController';
import { TrainingService } from '../../services';

class TrainingController extends BaseController {
  public init(): void {
    this.router.post('/create', passport.authenticate('jwt', { session: false }), this.addTraining);
    this.router.get('/list', passport.authenticate('jwt', { session: false }), this.getTrainings);
    this.router.put('/', passport.authenticate('jwt', { session: false }), this.updateTraining);
    this.router.delete('/:id', passport.authenticate('jwt', { session: false }), this.deleteTraining);
  }

  public async addTraining(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { user } = req;
      const training = await TrainingService.addTraining(user._id, req.body);
      return res.status(201).json(training)
    } catch (err) {
      return next(err instanceof Error ? err : new VError(err));
    }
  }

  public async getTrainings(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { user } = req;
      const trainings = await TrainingService.getTrainings(user._id);
      if (!trainings) return res.json(404).json({ message:'User not found' });
      return res.json(trainings)
    } catch (err) {
      return next(err instanceof Error ? err : new VError(err));
    }
  }

  public async updateTraining(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { user } = req;
      const updetedTraining = await TrainingService.addTraining(user._id, req.body);
      return res.json(updetedTraining)
    } catch (err) {
      return next(err instanceof Error ? err : new VError(err));
    }
  }

  public async deleteTraining(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { user } = req;
      const deletedId = await TrainingService.deleteTraining(user._id, req.params.id);
      return res.json({ _id: deletedId });
    } catch (err) {
      return next(err instanceof Error ? err : new VError(err));
    }
  }
};

export default TrainingController;
