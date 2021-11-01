
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit, OnDestroy {

  properties: Array<IProperty>;
  propertiesSub: Subscription

  constructor(private housingService: HousingService) { }

  ngOnInit(): void {

    this.propertiesSub = this.housingService.getAllProperties().subscribe(
      data => {
        this.properties = data;
      }, error => {
        console.log(error);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.propertiesSub) {
      this.propertiesSub.unsubscribe();
    }
  }

}
