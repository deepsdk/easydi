import { Component, OnInit } from '@angular/core';

import { MenuGroup } from "../menu-group";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuGroups: MenuGroup[];

  constructor() { }

  ngOnInit() {
    this.menuGroups = [
      {
        name: "Classification",
        menus: [
          {name: "Imagenet Models", url: "/imagenet"},
        ]
      },
      {
        name: "Segmentation",
        menus: [
          {name: "Imagenet Models", url: "/imagenet"},
        ]
      },
    ];
  }

}
