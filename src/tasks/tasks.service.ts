import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = ['firas', 'kebsi'];
  getAllTasks() {
    return this.tasks;
  }
}
