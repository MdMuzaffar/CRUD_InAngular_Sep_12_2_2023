import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  url = 'http://localhost:3000/';


  constructor(private http:HttpClient) { }

  AddUpdateUser(data : any , type: any): Observable<any>{
    if(type = 'Add'){
      return this.http.post(this.url+"Users", data)
    }else{
      return this.http.put(this.url+"Users/"+data.id,data)
    }
  }

  getAlluser(): Observable<any>{
    return this.http.get(this.url+"Users")
  }

  deleteUserById(id:any): Observable<any>{
    return this.http.delete(this.url +"Users/"+id)
  } 

  getUserById(id:any):Observable<any>{
    return this.http.get(this.url+"Users/"+id);
  }

}
