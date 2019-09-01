import { Injectable } from '@angular/core';
import { Assignee } from '../../models/assignee.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssigneesService {

  constructor(private client: HttpClient) { }

  get(role?: string): Observable<Assignee[]> {
    return this.client.get<Assignee[]>(`assignees${role ? `?role=${role}` : ''}`);
  }

  getByTeam(teamId: number, role?: string) {
    return this.client.get<Assignee[]>(`teams/${teamId}/assignees${role ? `?role=${role}` : ''}`);
  }
}
