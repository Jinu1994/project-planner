import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sprint } from '../../models/sprint.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SprintService {

  constructor(private client: HttpClient) { }

  getSprints(): Observable<Sprint[]> {
    return this.client.get<Sprint[]>(`sprints`);
  }
}
