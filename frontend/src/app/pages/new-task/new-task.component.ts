import { Component,OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {ActivatedRoute,Params,Router} from '@angular/router';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit{
  constructor(private taskService:TaskService,private route:ActivatedRoute,private router:Router){}

  listId:string;
  
  ngOnInit(){
    this.route.params.subscribe(
            (params:Params)=>{
           this.listId =  params['listId'];
           console.log(this.listId);
        }
      ); 
    }
  createTask(title: string): Observable<Task> { 
    return this.taskService.createTask(title, this.listId).pipe(
      map((response: Object) => {
        const newTask = response as Task;
        console.log(newTask);
        return newTask; // Return the newTask object
        this.router.navigate(['../'], { relativeTo: this.route });
      })
    );
  }
  
}
