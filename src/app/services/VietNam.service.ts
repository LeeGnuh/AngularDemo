import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const VN_PROVICE_API="http://localhost:3000/province";
const VN_DISTRICT_API="http://localhost:3000/district";
const VN_COMMUNE_API="http://localhost:3000/commune";

@Injectable({
  providedIn: 'root'
})

export class VietNamService {

constructor(private http: HttpClient) { }

  getProvice(): Observable<any[]>{
    return this.http.get<any[]>(VN_PROVICE_API);
  }
  getDistict(): Observable<any[]>{
    return this.http.get<any[]>(VN_DISTRICT_API);
  }
  getCommune(): Observable<any[]>{
    return this.http.get<any[]>(VN_COMMUNE_API);
  }
}
