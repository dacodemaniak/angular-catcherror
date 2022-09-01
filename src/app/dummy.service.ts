import { HttpResponse } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DummyService {
  public errorRaised(): Observable<any> {
    return of('Hello service').pipe(
      tap((response: any) => {
        if (response === 'Hello service') {
          return new HttpResponse({
            body: response,
            status: 200,
          });
        } else {
          return new HttpErrorResponse({
            error: new Error('Something went wrong'),
            status: 404,
          });
        }
      }),
      catchError((error) => throwError(() => new Error('Error was raised')))
    );
  }
}
