import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Issue } from './issue.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  getIssues(sprint: number): Observable<Issue[]> {
    return this.client.get<Issue[]>(`sprints/${sprint}/issues`);
  }

  constructor(private client: HttpClient) {
   }
}
