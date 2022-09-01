import { Component, OnInit } from '@angular/core';
import { DummyService } from './dummy.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';

  public constructor(private service: DummyService) {}

  public ngOnInit(): void {
    this.service.errorRaised().subscribe({
      next: (data: any) => {
        console.log('Well done' + data);
      },
      error: (error) => {
        console.log(error.message);
      },
    });
  }
}
