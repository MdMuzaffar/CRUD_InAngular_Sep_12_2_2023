import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  url = 'http://localhost:3000/';


  constructor(private http:HttpClient) { }

  AddUpdateUser(data : any): Observable<any>{
    return this.http.post(this.url+"Users", data)
  }

  getAlluser(): Observable<any>{
    return this.http.get(this.url+"Users")
  }

  deleteUserById(id:any): Observable<any>{
    return this.http.delete(this.url +"Users/"+id)
  }

}
