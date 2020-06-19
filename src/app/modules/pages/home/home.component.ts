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
      id: 'princess-peach-smash-bros-ultimate',
      character: 'Princess Peach',
      series: 'Super Mario Bros',
    },
    {
      id: 'holo-merchants-spice-and-wolf',
      character: 'Holo',
      series: 'Spice&Wolf',
    },
    {
      id: 'aqua-konosuba',
      character: 'Aqua',
      series: 'Konosuba!',
    },
    {
      id: 'tohru-swimsuit-dragon-maid',
      character: 'Tohru',
      series: 'Ms. Kobayashi\'s Dragon Maid',
    },
    {
      id: 'louise-familiar-of-zero',
      character: 'Louise',
      series: 'Familiar of Zero',
    },
    {
      id: 'violet-evergarden',
      character: 'Violet',
      series: 'Violet Evergarden',
    },
    {
      id: 'nami-gangsta-onepiece',
      character: 'Nami',
      series: 'One Piece',
    },
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
