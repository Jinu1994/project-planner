import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Team } from './team.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  getTeams(): Observable<Team[]> {
    return this.client.get<Team[]>('teams');
  }

  constructor(private client: HttpClient) {
   }
}
