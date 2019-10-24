import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-board-dialog',
  templateUrl: './board-dialog.component.html',
  styleUrls: ['./board-dialog.component.scss']
})
export class BoardDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<BoardDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    /**
     * If the board dialog is not clicked or clicked out of
     */
    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit() {
  }

}
