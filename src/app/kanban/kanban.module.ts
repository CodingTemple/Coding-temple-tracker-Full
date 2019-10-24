import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import for Shared Module
import { SharedModule } from '../shared/shared.module';

// Import for Angular Forms
import { FormsModule } from '@angular/forms';

// Import for DragDropModule
import { DragDropModule, DragDrop } from '@angular/cdk/drag-drop';

// Import for Angular Material Stuff
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { BoardComponent } from './board/board.component';
import { BoardListComponent } from './board-list/board-list.component';

//Import for KanBan Routing
import { KanbanRoutingModule } from './kanban-routing.module';
import { DialogComponent } from './dialog/dialog.component';
import { TaskDialogComponent } from './dialog/task-dialog.component';
import { BoardDialogComponent } from './board-dialog.component';

const components = [
  BoardComponent,
  BoardDialogComponent,
  BoardListComponent,
  TaskDialogComponent,
  DialogComponent

]

const modules = [
  KanbanRoutingModule,
  SharedModule,
  FormsModule,
  DragDropModule,
  MatButtonToggleModule,
  MatDialogModule,
  CommonModule
]


@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...modules,
  ],
  entryComponents: [BoardDialogComponent, TaskDialogComponent]
})
export class KanbanModule { }
