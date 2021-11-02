
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit, OnDestroy {
  SellRent = 1;
  properties: Array<IProperty>;
  propertiesSub: Subscription

  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit(): void {

    if(this.route.snapshot.url.toString()){
      this.SellRent = 2;
    }

    this.propertiesSub = this.housingService.getAllProperties(this.SellRent).subscribe(
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
