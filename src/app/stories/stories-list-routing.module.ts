import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoriesListComponent } from './stories-list.component';

const routes: Routes = [{
    path: '',
    component: StoriesListComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StoriesListRoutingModule { }
