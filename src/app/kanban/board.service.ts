import { Injectable } from '@angular/core';

// AngularFireAuth Import
import { AngularFireAuth } from '@angular/fire/auth';

// import AngularFireStore
import { AngularFirestore } from '@angular/fire/firestore';

// Import for all from Firebase App module
import * as firebase from 'firebase/app';


// import for SwitchMap and map
import { switchMap, map } from 'rxjs/operators';

// Import for Board and Task Models
import { Board, Task } from './board.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private afAuth: AngularFireAuth, private db:AngularFirestore) { }
 
  /**
   * This Will create a new board for the current user
   */
  
  async createBoard(data:Board){
     const user = await this.afAuth.auth.currentUser;
     return this.db.collection('boards').add({
       ...data,
       uid: user.uid,
       tasks: [{
         description: "Hello!", label: 'yellow'
       }]
     })
   }

   /**
    * This will delete a board from the database
    */

    deleteBoard(boardId: string){
      return this.db
      .collection('boards')
      .doc(boardId)
      .delete()
    }

    /**
     * Update a board/tasks that is currently on the database
     */

    updateTasks(boardId: string, tasks: Task[]){
      return this.db
      .collection('boards')
      .doc(boardId)
      .update({tasks})
    }

    /**
     * Remove a specific task from the board
     */

     removeTask(boardId: string, task:Task){
       return this.db
       .collection('boards')
       .doc(boardId)
       .update({
         tasks: firebase.firestore.FieldValue.arrayRemove(task)
       })
     }

     /**
      * Get all boards owned by the current user
      */

      getUserBoards(){
        return this.afAuth.authState.pipe(
          switchMap(user => {
            if(user) {
              return this.db
                .collection<Board>('boards',ref => 
                  ref.where('uid', '==', user.uid).orderBy('priority')
                  )
                  .valueChanges( { idField: 'id'} )
            } else {
              return []
            }
          })
        )
      }

      /**
       * Run a batch write to change the priority of each board for sorting
       */
      sortBoards(boards:Board[]){
        const db = firebase.firestore();
        const batch = db.batch();
        const refs = boards.map(b => db.collection('boards').doc(b.id));
        refs.forEach( (ref,idx) => batch.update(ref, {priority: idx}) ) 
        batch.commit()
      }


}

