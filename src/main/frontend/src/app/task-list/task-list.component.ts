import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './../../todo-client';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input()
  set tasks(val) {
    this._tasks = val;
    if(this.done && this._tasks) {
      const check = true? this.done==='Y':false;
      this._tasks = this._tasks.filter(e => e.done===check);
    }
  }
  public _tasks: Array<Task>;
  @Input() done: string;
  @Output() updateTask = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
