import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '@myapp/modules/services';

import {
  CosplayDetails
} from '@myapp/modules/models';

@Component({
  selector: 'app-cosplay',
  templateUrl: './cosplay.component.html',
  styleUrls: ['./cosplay.component.scss']
})
export class CosplayPageComponent {

  cosplays: Observable<CosplayDetails[]> = this.dataService.cosplays;
  term: string;

  constructor(private dataService: DataService) {
  }

}
