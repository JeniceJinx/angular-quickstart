import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  clearEmail(): void {
    throw new Error('Method not implemented.');
  }
  getItems() {
    throw new Error('Method not implemented.');
  }
  api!: string;

  constructor(private http: HttpClient) { }

  PostMessage(input:any){
    return this.http.post(this.api, input, { responseType: 'text'}).pipe(
      map(
        (response: any) => {
          if(response){
            return response;
          }
        },
        (error: any) => {
          return error;
        }
      )
    )
  }
}
