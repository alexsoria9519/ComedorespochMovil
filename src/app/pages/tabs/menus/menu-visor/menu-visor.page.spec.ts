import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuVisorPage } from './menu-visor.page';

describe('MenuVisorPage', () => {
  let component: MenuVisorPage;
  let fixture: ComponentFixture<MenuVisorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuVisorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuVisorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
