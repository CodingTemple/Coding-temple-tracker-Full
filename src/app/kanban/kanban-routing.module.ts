import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import for Routes and the RouterModule
import { Routes, RouterModule } from '@angular/router';

// Import for Board-List Component
import { BoardListComponent } from './board-list/board-list.component';

const routes: Routes = [
  {
    path: '', component: BoardListComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
   exports: [RouterModule]
})
export class KanbanRoutingModule { }
