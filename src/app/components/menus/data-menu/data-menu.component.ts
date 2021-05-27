import { Component, Input, OnInit } from "@angular/core";
import { Menu } from "../../../config/clases";
import { MenuService } from "../../../services/menu.service";

@Component({
  selector: "app-data-menu",
  templateUrl: "./data-menu.component.html",
  styleUrls: ["./data-menu.component.scss"],
})
export class DataMenuComponent implements OnInit {
  @Input() idMenu: number = 0;
  menu: Menu = {
    intidmenu: 0,
    strcaracteristicas: "",
    blnestado: false,
    intidtipomenu: {
      intidtipo: 0,
      strtipo: "",
    },
  };

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.obtenerDatosMenu();
  }

  async obtenerDatosMenu(){
    try{
      let respuesta: any = await this.menuService.getMenu(this.idMenu);

      if(respuesta?.success === 'ok'){
        this.menu = JSON.parse(respuesta?.menu);
      }
      console.log('Menu ', this.menu);
    }catch(e){
      console.error("Error ", e);
    }
  }


}
