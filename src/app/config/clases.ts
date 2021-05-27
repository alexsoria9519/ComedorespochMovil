export interface TipoMenu {
  intidtipo?: number;
  strtipo?: string;
}

export interface Menu {
  intidmenu?: number;
  strcaracteristicas?: string;
  blnestado?: boolean;
  intidtipomenu?: TipoMenu;
}

export interface Menus {
  cantidad?: number;
  planificacionesMenu: TipoMenu[];
}

export interface planificacionMenu {
    intid?: number,
    dtfechainicio?: string,
    dtfechafin?: string,
    intidmenu?: Menu;
}

export interface planificacionesMenu{
    cantidad?: number;
    planificacionesMenu: planificacionMenu[];
}


