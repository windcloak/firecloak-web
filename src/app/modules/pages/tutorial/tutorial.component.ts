import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DataService } from '@myapp/modules/services';

import {
  TutorialDetails
} from '@myapp/modules/models';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialPageComponent implements OnInit {

  tutorials: Observable<TutorialDetails[]>;
  term: string;
  loading = true;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.tutorials = this.dataService.tutorials.pipe(
      tap(_ => {
        this.loading = false;
      })
    );
  }

}
