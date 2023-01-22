import { HttpParams } from '@angular/common/http';
import { Md5 } from 'md5-typescript';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthorizerService {

  constructor() {}

    createAuthorization(){
     let params = this.getParameters(this.generatetHash());
     const httpParams = new HttpParams()
     .append('apikey', params.apiKey)
     .append('hash', params.hash)
     .append('ts', params.ts)
     return httpParams;
  }

  private getParameters(token : any){
    let params: Autorization = {
      apiKey: environment.apikey,
      ts: environment.ts,
      hash: token
    }
    return params;
  }

  private generatetHash(){
    const key = environment.ts + environment.privateKey + environment.apikey;
    return Md5.init(key);
  }
}

export interface Autorization {
  apiKey: string;
  ts: string;
  hash: string
}

