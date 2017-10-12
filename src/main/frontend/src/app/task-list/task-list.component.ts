import { Component, OnInit, Input } from '@angular/core';
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
    if(this.done!==undefined) {
      this._tasks = this._tasks.filter(e => e.done===this.done);
    }
  }
  public _tasks: Array<Task>;
  @Input() done:boolean;

  constructor() { }

  ngOnInit() {
  }

}
