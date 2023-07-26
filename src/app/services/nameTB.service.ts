import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { nameTable } from '../models/Pokemon';
import { Observable } from 'rxjs';

const NAME_API = 'http://localhost:3000/nameTable';

@Injectable({
  providedIn: 'root'
})

export class NameTBService {

  constructor(private http: HttpClient) { }

  getAll():Observable<nameTable[]>{
    return this.http.get<nameTable[]>(NAME_API);
  }

} 
