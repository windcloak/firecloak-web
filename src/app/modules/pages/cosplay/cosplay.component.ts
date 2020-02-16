import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
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

  cosplays: Observable<CosplayDetails[]>;
  term: string;
  loading = true;

  constructor(private dataService: DataService) {
  }

ngOnInit() {
  this.loadCosplayGrid();
}

loadCosplayGrid() {
  this.cosplays = this.dataService.cosplays.pipe(
    tap(_ => {
      this.loading = false;
    })
  );
}

}
