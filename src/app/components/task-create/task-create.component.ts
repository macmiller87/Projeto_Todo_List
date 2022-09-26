import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiTaskService } from 'src/app/service/rest-api-task.service';
import { v4 as uuidV4 } from "uuid";

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})

export class TaskCreateComponent implements OnInit {

  titleComp: string = "Create Task";

  @Input() DataTask = {

    id: uuidV4(),
    author: "",
    title: "",
    description: "",
    status: "pendente",
    created_at: new Date().toDateString()

  }

  constructor(
    public restApi: RestApiTaskService,
    public route: Router
  ) { }

  ngOnInit(): void {

  }

  createTask() {

    this.restApi.insertDataTask(this.DataTask).subscribe(() => {
      this.route.navigate(["/tasks-list"])
    });

  }

}
