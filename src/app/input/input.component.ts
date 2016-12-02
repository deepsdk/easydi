import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core';

import { DeepapiService } from "../deepapi.service";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @ViewChild("realChooseFile")
  realChooseFile: ElementRef;

  inputImageSrc: string;
  isDragOver: boolean = false;

  constructor(private renderer: Renderer, 
              private deepapiService: DeepapiService) { }

  ngOnInit() {
  }

  onChooseFile() {
    let evt = new MouseEvent("click", {bubbles: true});
    this.renderer.invokeElementMethod(
      this.realChooseFile.nativeElement, "dispatchEvent", [evt]);
  }

  readFile(file){
    console.log(file.name);
    console.log(file.type);
    console.log(file.size);

    let reader = new FileReader();
    reader.onload = () => this.inputImageSrc = reader.result;
    reader.readAsDataURL(file);

    this.deepapiService.getUrl(file.name)
      .subscribe(url => console.log(url),
                 err => console.log(err));
  }
}
