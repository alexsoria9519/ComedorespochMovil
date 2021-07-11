import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HorarioAntencionPage } from './horario-antencion.page';

describe('HorarioAntencionPage', () => {
  let component: HorarioAntencionPage;
  let fixture: ComponentFixture<HorarioAntencionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioAntencionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HorarioAntencionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
