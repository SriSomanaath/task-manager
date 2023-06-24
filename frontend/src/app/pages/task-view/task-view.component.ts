import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute, Params } from '@angular/router';
// import { List } from 'src/app/models/list.model';

class Task {
  _id: string;
  _listId: string;
  title: string;
}

class List {
  _id: string;
  title: string;
}
@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {
  lists: List[];
  tasks: Task[];

  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        if (params['listId']) {
          console.log("received aa", params);
          this.taskService.getTasks(params['listId']).subscribe((tasks: Task[]) => {
            this.tasks = tasks;
            console.log("tasks", tasks);
          });
        } else {
          this.tasks = undefined;
        }
      }
    );

    this.taskService.getLists().subscribe((lists: List[]) => {
      this.lists = lists;
    });
  } 

  onTaskClick(task: Task) {
    // Handle task click event
  }
}
