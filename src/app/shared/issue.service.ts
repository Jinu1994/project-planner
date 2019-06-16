import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Issue } from '../shared/issue'

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  getIssues(): Observable<Issue[]> {
    return of([
      new Issue("Bizgain UI", "DX-16237"),
      new Issue("Bizgain Local business", "DX-17089")
    ])
  }

  constructor() { }
}
