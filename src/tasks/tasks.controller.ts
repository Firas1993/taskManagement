import { Controller, Get, Post,Patch,Delete,Body,Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task,TaskStatus } from '../../dist/tasks/task.model';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }
  @Get('/:id')
  getTaskById(@Param('id') id:string):Task{
      return this.tasksService.getTaskById(id)
  }
  @Delete('/:id')
  deleteTask(@Param('id') id:string):Task[]{
    return this.tasksService.deleteTask(id)
  }
  @Post()
  addTask(@Body('title') title:string,@Body('description') description:string):Task{
    return this.tasksService.createTask(title,description);
  }
  @Patch('/:id/status')
  updateTaskStatus(@Param('id') id:string, @Body('status') status:TaskStatus):Task{
    return this.tasksService.updateTaskStatus(id,status);
  }
}
