import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(`https://run.mocky.io/v3/7e0d211f-2212-4ffb-af3c-4f44b0f58795`);
  }
}
