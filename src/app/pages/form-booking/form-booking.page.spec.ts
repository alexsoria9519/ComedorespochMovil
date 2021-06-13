import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormBookingPage } from './form-booking.page';

describe('FormBookingPage', () => {
  let component: FormBookingPage;
  let fixture: ComponentFixture<FormBookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
