import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent implements OnInit {

  labelOptions = ['purple', 'blue', 'green', 'yellow', 'red', 'gray'];

  constructor(public dialogRef: MatDialogRef<TaskDialogComponent>,
      private ps: BoardService,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    /**
     * Handle if the dialog is not clicked or clicked out of
     */

     onNoClick(): void {
       this.dialogRef.close();
     }

     /**
      * Handle a Task being Deleted
      */
     handleTaskDelete(){
       this.ps.removeTask(this.data.boardId, this.data.task);
       this.dialogRef.close();
     }

  ngOnInit() {
  }

}
