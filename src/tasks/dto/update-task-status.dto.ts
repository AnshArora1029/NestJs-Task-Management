import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class UpdateTaskStatusdto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
