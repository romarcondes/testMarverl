import { AuthorizerService } from 'src/service/authorizer.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class Apis {

  constructor(private http: HttpClient, private authorizerService: AuthorizerService) { }

  getvalues(param: string){

    let promise = new Promise((resolve, reject) => {
      const url = environment.baseUrl.concat(param)
      this.http.get(url,{params: this.authorizerService.createAuthorization()}).subscribe(data => {
        resolve(data);
      }, (error) => {
        reject(error)
      })
    });
    return promise;
  }
}


