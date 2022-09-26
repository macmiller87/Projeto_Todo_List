import { Component, Injectable, OnInit, Output } from '@angular/core';
import { RestApiTaskService } from '../../service/rest-api-task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

@Injectable()
export class TaskListComponent implements OnInit {

  titleComp: string = "List All Task"

  listTasks: any = [];

  constructor(
    public restApi: RestApiTaskService,
  ) { }

  ngOnInit(): void {
    this.listTasksByUser();
  }

  listTasksByUser() {
    this.restApi.listTasks().subscribe((datas: {}) => {
      this.listTasks = datas;
    });
  }

  deleteTasks(id: any) {

    if(confirm("Are you sure you want to delete this task")) {
      this.restApi.deleteTaskByID(id).subscribe(() => { this.listTasksByUser() });
    }

  }

}
