import { Component, OnInit } from '@angular/core';
import { TasksApi, Task } from './../todo-client';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // added tasks
  public tasks: Array<Task>;
  // reactive form to add task
  public taskForm: FormGroup;


  constructor(private taskApi: TasksApi) {}

  ngOnInit() {
    this.taskForm = new FormGroup({
      title: new FormControl('',[Validators.required]),
      description: new FormControl('',[]),
      category: new FormControl(''),
      done: new FormControl(false),
      taskCompletionDate: new FormControl(new Date())
    });
    this.loadTasks();

  }

  addTask() {
    this.taskApi.tasksPost(this.taskForm.value).subscribe(
      res => {
        this.taskForm.reset({done:false});
        this.taskForm.markAsPristine();
        this.loadTasks();
      }
    )
  }

  updateTask(task:Task) {
    this.taskApi.tasksIdPut(task.id, task).subscribe(
      res => {
        this.loadTasks();
      }
    )
  }

  private loadTasks(){
    this.taskApi.tasksGet().subscribe(
          res => {
            this.tasks = (<any>res)._embedded.tasks;
          }
        )
  }
}
