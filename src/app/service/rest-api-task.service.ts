import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, retry, catchError } from "rxjs";
import { Tasks } from '../model/task';
import { Errors } from '../error/Errors';

@Injectable()
export class RestApiTaskService {

  baseURL: string = "http://localhost:3000";

  private errorHandle = new Errors();

  constructor(
    private reqHttp: HttpClient,
  ) { }

  authorizationAccess = {
    headers: new HttpHeaders({
      "content-Type": "application/json"
    })
  };

  listTasks(): Observable<Tasks> {

    return this.reqHttp
    .get<Tasks>(this.baseURL+"/tasks")
    .pipe(
      retry(1),
      catchError(this.errorHandle.appErro)
    );

  };

  acessDataTaskById(id: any): Observable<Tasks> {

    return this.reqHttp.get<Tasks>(this.baseURL+`/tasks/${id}`)
    .pipe(
      retry(1),
      catchError(this.errorHandle.appErro)
    );

  };

  insertDataTask(newData: any): Observable<Task> {

    return this.reqHttp
    .post<Task>(this.baseURL+"/tasks", JSON.stringify(newData), this.authorizationAccess)
    .pipe(
      retry(1),
      catchError(this.errorHandle.appErro)
    );

  };

  updateTaskById(id: any, newData: any): Observable<Tasks> {

    return this.reqHttp
    .put<Tasks>(this.baseURL+`/tasks/${id}`, JSON.stringify(newData), this.authorizationAccess)
    .pipe(
      retry(1),
      catchError(this.errorHandle.appErro)
    );

  };

  deleteTaskByID(id: any) {

    return this.reqHttp
    .delete<Tasks>(this.baseURL+`/tasks/${id}`, this.authorizationAccess)
    .pipe(
      retry(1),
      catchError(this.errorHandle.appErro)
    );

  };

}
