import { Injectable } from '@angular/core';
import { Assignee } from './assignee.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssigneesService {

  constructor(private client: HttpClient) { }

  getAssignees(): Observable<Assignee[]> {
    return this.client.get<Assignee[]>('assignees');
  }
}
