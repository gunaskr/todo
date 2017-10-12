import { Component, OnInit } from '@angular/core';
import { TasksApi, Task } from './../todo-client';
import { MatSnackBar } from '@angular/material';
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


  constructor(private taskApi: TasksApi,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.taskForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', []),
      category: new FormControl(''),
      done: new FormControl(false),
      taskCompletionDate: new FormControl(new Date())
    });
    this.loadTasks();

  }

  addTask() {
    this.taskApi.tasksPost(this.taskForm.value).subscribe(
      res => {
        this.taskForm.reset({ done: false });
        this.taskForm.markAsPristine();
        this.snackBar.open('TASK ADDED SUCCESSFULLY', 'OK', {
          duration: 2000,
        });
        this.loadTasks();
      },
      err => {
        this.showError(err);
      }
    )
  }

  updateTask(task: Task) {
    this.taskApi.tasksIdPut(task.id, task).subscribe(
      res => {
        this.snackBar.open('TASK UPDATED SUCCESSFULLY', 'OK', {
          duration: 2000,
        });
        this.loadTasks();
      },
      error => {
        this.showError(error);
      }
    )
  }

  private loadTasks() {
    this.taskApi.tasksGet().subscribe(
      res => {
        this.tasks = (<any>res)._embedded.tasks;
      },
      err => {
        this.showError(err);
      }
    )
  }

  private showError(e): void{
    this.snackBar.open('Server Error', 'OK', {
          duration: 2000,
        });
  }
}
