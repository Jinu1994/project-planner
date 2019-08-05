import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IssuesListComponent } from './issues-list.component';

const routes: Routes = [{
    path: 'stories',
    component: IssuesListComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IssuesListRoutingModule { }
