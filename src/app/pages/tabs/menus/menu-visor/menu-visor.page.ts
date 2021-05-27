import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-visor',
  templateUrl: './menu-visor.page.html',
  styleUrls: ['./menu-visor.page.scss'],
})
export class MenuVisorPage implements OnInit {

  idMenu: number = 0;
  constructor(private route: ActivatedRoute,) { }

  async ngOnInit() {
    await this.route.queryParams
      .subscribe(params => {
          // tslint:disable-next-line: no-string-literal
          this.idMenu = params['idMenu'];
      });
  }

  

}
