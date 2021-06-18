import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { VentasService } from "../../services/ventas.service";
import { CostoUsuario } from "../../config/clases";
import { UiService } from "src/app/services/ui.service";

@Component({
  selector: "app-form-booking",
  templateUrl: "./form-booking.page.html",
  styleUrls: ["./form-booking.page.scss"],
})
export class FormBookingPage implements OnInit {
  tieneInternet = navigator.onLine;
  ventaForm: FormGroup;
  tipoUsuario: string;
  costosUsuarios: CostoUsuario[];
  costos = {
    customAlertOptions: {
      header: "Menú",
      subHeader: "Selecciones un menú",
      translucent: true,
    },
    defecto: {},
  };

  constructor(
    private formBuilder: FormBuilder,
    private ventasService: VentasService,
    private uiService: UiService
  ) {
    this.ventaForm = formBuilder.group({
      dtfecha: [this.formatDate(new Date()), Validators.required],
      intcantidad: [1, Validators.required],
      intidcostousuario: [0, Validators.required],
    });
  }

  ngOnInit() {
    this.loadDataCostosUsuario();
    console.log("Data ", this.costosUsuarios);
  }

  initForm() {}

  async loadDataCostosUsuario() {
    let respuesta: any = await this.ventasService.getCostosUsuario(
      "1721796066"
    );
    console.log("Respuesta ", respuesta);
    if (respuesta?.success === "ok") {
      let data: any = JSON.parse(respuesta?.costosUsuario);
      this.costosUsuarios = data?.costosUsuarios;
      this.tipoUsuario = respuesta?.tipoUsuario;
    }

    console.log("Data ", this.costosUsuarios);
  }

  async registrarReserva() {
    // this.uiService.abrirLoading(`Cargando.....`);

    if (this.ventaForm.invalid) {
      this.uiService.tinyAlertColor(
        `Los datos son incorrectos, por favor ingrese todos los campos`,
        1500,
        "bottom",
        "danger"
      );
      return;
    }

    if (this.ventaForm.value.intidcostousuario <= 0) {
      this.uiService.tinyAlertColor(
        `Se debe seleccionar un opción de menú`,
        1500,
        "middle",
        "danger"
      );
      return;
    }

    console.log("Reserva ", this.ventaForm.value);

    let data = this.getJSONReserva(this.ventaForm.value);

    console.log("data ", JSON.stringify(data));

    let respuesta: any = await this.ventasService.insertVenta(data);

    console.log("respuesta ", respuesta);
    if (respuesta.success === "ok") {
      this.uiService.tinyAlertColor(
        `Registro Correcto`,
        1500,
        "middle",
        "success"
      );
    } else {
      this.uiService.tinyAlertColor(
        `Existe un error en el ingreso`,
        1500,
        "middle",
        "danger"
      );
    }
  }

  getJSONReserva(data: any) {
    let dataVenta: any = {};
    let costoUsuario: any = {};
    let venta: any = {};
    dataVenta.dtfecha = this.stringToDate(data.dtfecha);
    dataVenta.intcantidad = data.intcantidad;
    dataVenta.blnestado = new Boolean(false);
    dataVenta.blnreserva = new Boolean(true);
    costoUsuario.intidcostousuario = data.intidcostousuario;
    dataVenta.intidcostousuario = costoUsuario;
    venta.venta = dataVenta;
    return venta;
  }

  formatDate(date: Date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  stringToDate(dateString: string) {
    var dateParts: any = dateString.split("/");

    // month is 0-based, that's why we need dataParts[1] - 1
    var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    return new Date();
  }

  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}
