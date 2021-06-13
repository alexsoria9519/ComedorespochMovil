export interface TipoMenu {
  intidtipo?: number;
  strtipo?: string;
  strdetalle?: string;
}

export interface TipoUsuario {
  intidtipo?: number;
  strdetalle?: string;
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
  intid?: number;
  dtfechainicio?: string;
  dtfechafin?: string;
  intidmenu?: Menu;
}

export interface planificacionesMenu {
  cantidad?: number;
  planificacionesMenu: planificacionMenu[];
}

export interface VentaCostoUsuario {
  cantidadvendidos?: number;
  costounitario?: number;
  nombrecostousuario?: string;
  total?: number;
}

export interface dataVentas {
  ventasDiarias?: VentaCostoUsuario[];
  totalVentas?: number;
  cantidadVentas?: number;
}

export interface Venta {
  intidventa?: number;
  dtfecha?: string;
  intcantidad?: number;
  blnestado?: boolean;
  blnreserva?: boolean;
  intidcostousuario?: CostoUsuario;
  qrcode?: string;
}

export interface Ventas {
  ventas?: Venta[];
  cantidad?: number;
}

export interface CostoUsuario {
  intidcostousuario?: number;
  strcedula?: string;
  intidcosto?: Costo;
}

export interface Costo {
  intidcosto?: number;
  strdetalle?: string;
  mnvalor?: number;
  dtFechas?: Date;
  blnestado?: boolean;
  intidtipomenu: TipoMenu;
  intidtipousuario: TipoUsuario;
}

export interface dataReporteVenta {
  cantidadvendidos?: number;
  costounitario?: number;
  nombrecostousuario?: string;
  total?: number;
}

export interface reporteVentas {
  ventas?: dataReporteVenta[];
  totalVentas?: number;
  cantidadVentas?: number;
}
