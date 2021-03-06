import { Injectable } from '@nestjs/common';
import { Task,TaskStatus } from './task.model';
import * as uuid from 'uuid/v1'
@Injectable()
export class TasksService {
  private tasks: Task[];
  getAllTasks(): Task[] {
    return this.tasks;
  }
  getTaskById(id:string):Task{
    return this.tasks.find(task=> task.id ===id)
  }
  deleteTask(id:string):Task[]{
    this.tasks = this.tasks.filter(task=> task.id !== id)
    return this.tasks;
  }
  createTask(title:string,description:string):Task{
    const task:Task={
      id:uuid(),
      title,description,status:TaskStatus.OPEN
    }
    this.tasks.push(task);
    return task;
  }
  updateTaskStatus(id:string,status:TaskStatus):Task{
      const task = this.getTaskById(id);
      task.status = status;
      return task;
  }
  }
