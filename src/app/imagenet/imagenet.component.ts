import { Component, OnInit } from '@angular/core';
import { Model } from "../model";

@Component({
  selector: 'app-imagenet',
  templateUrl: './imagenet.component.html',
  styleUrls: ['./imagenet.component.css']
})
export class ImagenetComponent implements OnInit {
  models: Model[];

  constructor() { }

  ngOnInit() {
    this.models = [
      {name: "BVLC GoogleNet", category: "GoogleNet", description: "-"},
      {name: "googlenet", category: "Alexnet", description: "-"},
    ];
  }

}
