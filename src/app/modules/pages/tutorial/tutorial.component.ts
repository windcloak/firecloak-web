import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '@myapp/modules/services';

import {
  TutorialDetails
} from '@myapp/modules/models';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialPageComponent {

  tutorials: Observable<TutorialDetails[]> = this.dataService.tutorials;
  term: string;

  constructor(private dataService: DataService) {
  }

}
