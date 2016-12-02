import { Component, OnInit } from '@angular/core';

import { MenuGroup } from "../menu-group";
import { Menu } from "../menu";
import { ModelService } from "../model.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuGroups: MenuGroup[] = [];

  constructor(private modelService: ModelService) { }

  ngOnInit() {
    this.initMenuGroup();
  }

  initMenuGroup(){
    let cats = this.modelService.getModelCategories();
    for (let cat of cats){
      let models = this.modelService.getModels(cat.id);
      let menus: Menu[] = [];
      for (let model of models){
        menus.push({name: model.name, anchor: "#" + model.shortName });
      }
      this.menuGroups.push({name: cat.name, path: cat.name.toLowerCase(), menus: menus});
    }

    console.log(this.menuGroups);
  }

}
