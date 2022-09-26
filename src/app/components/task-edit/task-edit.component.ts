import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiTaskService } from 'src/app/service/rest-api-task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})

export class TaskEditComponent implements OnInit {

  constructor(
    private restApi: RestApiTaskService,
    public copyRoute: ActivatedRoute,
    private route: Router
  ) { }

  titleComp: string = "Change Record";

  copyRoutes = this.copyRoute.snapshot.params["id"];

  updateDatas: any = {};

  ngOnInit(): void {

    this.restApi.acessDataTaskById(this.copyRoutes).subscribe((datas: any) => {
      this.updateDatas = datas;
    });
  }


  updateDataTask() {

    if(confirm("Are you sure you want to change the registry?")) {
      this.restApi.updateTaskById(this.copyRoutes, this.updateDatas).subscribe(() => {
        this.route.navigate(["/tasks-list"]);
      });
    }

  }

}
