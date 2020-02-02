import { Component, OnInit } from '@angular/core';
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
export class CosplayPageComponent implements OnInit{

  cosplays: Observable<CosplayDetails[]> = this.dataService.cosplays;
  term: string;
  loading = true;

  constructor(private dataService: DataService) {
  }

ngOnInit(): void {
  this.cosplays = this.dataService.cosplays;
  this.loading = false;
}

}
