import { Injectable } from '@angular/core';
import { MissionDetail } from './mission-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MissionDetailService {
  formData: MissionDetail;
  readonly rootURL = 'http://localhost:5000/api'; // make sure about port number
  list: MissionDetail[];

  constructor(private http: HttpClient) { }
// przesyłanie elementów na serwer
  postMissionDetail() {
    return this.http.post(this.rootURL + '/MissionDetail', this.formData);
  }
  putMissionDetail() {
    return this.http.put(this.rootURL + '/MissionDetail/' + this.formData.Id, this.formData);
  }
  deleteMissionDetail(id) {
    return this.http.delete(this.rootURL + '/MissionDetail/' + id);
  }

// pobieranie elementów z serwera
  refreshlist() {
    this.http.get(this.rootURL + '/MissionDetail')
    .toPromise()
    .then(res => this.list = res as MissionDetail[]);
  }
}
