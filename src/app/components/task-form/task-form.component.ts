import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/models/task';

import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  title: string;
  description: string;
  taskForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public taskService: TaskService) { }

  ngOnInit() {
    this.createTaskForm();
  }

  private createTaskForm() {
    this.taskForm = this.formBuilder.group({
      title: [ '', Validators.required ],
      description: [ '', Validators.required ]
    });
  }

  addTask(newTitle: HTMLInputElement, newDescription: HTMLInputElement) {
    this.taskService.addTask({
      title: newTitle.value,
      description: newDescription.value,
      hide: true
    });
    newTitle.value = '';
    newDescription.value = '';
    return false;
  }

}
