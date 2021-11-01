import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  Properties: Array<any> = [
    {
      "Id" : 1,
      "Name": "House1",
      "Type": "House",
      "Price": 12000,
    },
    {
      "Id" : 2,
      "Name": "Erose Villa",
      "Type": "House",
      "Price": 14000,
    },
    {
      "Id" : 3,
      "Name": "Bedroom Flat",
      "Type": "Flat",
      "Price": 10000,
    },
    {
      "Id" : 4,
      "Name": "Whatever Estate",
      "Type": "House",
      "Price": 16000,
    },
    {
      "Id" : 5,
      "Name": "Big house",
      "Type": "House",
      "Price": 20000,
    },
    {
      "Id" : 6,
      "Name": "Pearl White House",
      "Type": "House",
      "Price": 18000,
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
