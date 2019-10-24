import { Injectable } from '@angular/core';

// Import for SnackBar
import { MatSnackBar } from '@angular/material/snack-bar';

// Import Angular Router
import { Router } from '@angular/router';

//Import for tap operator - which helps with routing
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(private snackBar: MatSnackBar, private router: Router) { }

  authError(){
    this.snackBar.open("You must Be Logged In!", "OK", {
      duration:5000
    })

    return this.snackBar._openedSnackBarRef
      .onAction()
      .pipe(
        tap(_ =>
          this.router.navigate(['/login'])
        )
      )
      .subscribe()
  }
}
