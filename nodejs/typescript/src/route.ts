import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: 'Ignite Nodejs',
    duration: 3,
    educator: 'Paulo A.',
  });

  return response.send();
}
