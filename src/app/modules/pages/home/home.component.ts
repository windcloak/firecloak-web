import { Component, OnInit } from '@angular/core';
import { DataService } from '@myapp/modules/services';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import {
  CosplayDetails,
  TutorialDetails
} from '@myapp/modules/models';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomePageComponent implements OnInit {

  cosplays: Observable<CosplayDetails[]>;
  tutorials: Observable<TutorialDetails[]>;
  loadingCos = true;
  loadingTut = true;

introCarousel = [
  {
    title: 'cosplay',
    description: 'Construction notes & gallery'
  },
  {
    title: 'tutorials',
    description: 'Step by step instructions on how to make things'
  },
  {
    title: 'cosplay',
    description: 'Construction notes & gallery'
  }
];
 
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadCosplayGrid();
    this.loadTutorialGrid();
  }

  private loadCosplayGrid() {
    this.cosplays = this.dataService.cosplaysPreview.pipe(
      tap(_ => {
        this.loadingCos = false;
      })
    );
  }

  private loadTutorialGrid() {
    this.tutorials = this.dataService.tutorialsPreview.pipe(
      tap(_ => {
        this.loadingTut = false;
      })
    );
  }

}
