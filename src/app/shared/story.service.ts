import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Story } from '../shared/story';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Storieservice {
  getStories(): Observable<Story[]> {
    return this.client.get<Story[]>('stories');
  }

  constructor(private client: HttpClient) {
   }
}
