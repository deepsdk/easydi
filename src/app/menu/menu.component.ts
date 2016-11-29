import { Component, OnInit } from '@angular/core';
import { Menu } from "../menu";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: Menu[];

  constructor() { }

  ngOnInit() {
    this.menus = [
      {name: "Imagenet", url: "/imagenet"},
      {name: "Segmentation", url: "/segmentation"},
    ];
  }

}
