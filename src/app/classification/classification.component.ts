import { Component, OnInit } from '@angular/core';

import { Model } from "../model";
import { ModelService } from "../model.service";

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.css']
})
export class ClassificationComponent implements OnInit {
  models: Model[] = [];

  constructor(private modelService: ModelService) { }

  ngOnInit() {
    this.models = this.modelService.getModels(0);
  }

}
