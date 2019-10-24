import { Component, OnInit, OnDestroy } from '@angular/core';

// import Subscription Operator from rxjs
import { Subscription } from 'rxjs';

// Import for CdkDragDrop and moveItemInArray
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

//Import for Board Model
import { Board } from '../board.model';

//Import for BoardService
import { BoardService } from '../board.service';

// Import for MatDialog 
import { MatDialog } from '@angular/material/dialog';

// Import BoardDialogComponent
import { BoardDialogComponent } from '../board-dialog.component';



@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit,OnDestroy {

  boards: Board[];
  sub: Subscription;

  constructor(public boardService: BoardService, public dialog: MatDialog) { }

  // Get all of the board data from Firebase
  ngOnInit() {
    this.sub = this.boardService
      .getUserBoards()
      .subscribe(boards => (this.boards = boards ))
  }

  // Release the Data Communication from Firebase
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  // Drop event for moving elements on HTML
  drop(event: CdkDragDrop<string[]>){
    moveItemInArray(this.boards, event.previousIndex, event.currentIndex);
    this.boardService.sortBoards(this.boards);
  }

  openBoardDialog(): void {
    const dialogRef = this.dialog.open(BoardDialogComponent,{
      width: '400px',
      data: { }
    });

    // Close DialogRef when and display result
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.boardService.createBoard({
          title: result,
          priority: this.boards.length
        })
      }
    })
  }

}
