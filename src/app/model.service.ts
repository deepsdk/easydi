import { Injectable } from '@angular/core';

import { ModelCategory } from "./model-category";
import { Model } from "./model";

@Injectable()
export class ModelService {
  models: Model[][];

  constructor() { 
    this.downloadModels();
  }

  getModelCategories(): ModelCategory[] {
    return [
      {id: 0, name: "Classification"},
      {id: 1, name: "Detection"},
    ];
  }

  getModels(categoryId: number): Model[] {
    return this.models[categoryId];
  }

  downloadModels(): void {
    this.models = [
      [
        {name: "Berkeley-trained BVLC GoogLeNet", shortName: "bvlc-googlenet", origin: "zoo"},
        {name: "Network in Network", shortName: "nin-imagenet", origin: "zoo"},
        {name: "Places-CNN model from MIT", shortName: "googlenet-places205", origin: "zoo"},
        {name: "Salient Object Subitizing", shortName: "googlenet-sos", origin: "zoo"},
      ],

      [
        {name: "SegNet Semantic Pixel-Wise Labelling", shortName: "segnet-driving-web-demo", origin: "zoo"},
        {name: "SegNet Semantic Pixel-Wise Labelling", shortName: "segnet-basic-camvid", origin: "zoo"},
        {name: "TCNN Facial Landmark Detection", shortName: "tcnn-facial-landmark", origin: "zoo"},
        {name: "Holistically-Nested Edge Detection", shortName: "hed-pretrained-bsds", origin: "zoo"},
      ],
    ];
  }

}
