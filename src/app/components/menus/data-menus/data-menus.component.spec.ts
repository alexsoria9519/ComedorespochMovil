import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DataMenusComponent } from './data-menus.component';

describe('DataMenusComponent', () => {
  let component: DataMenusComponent;
  let fixture: ComponentFixture<DataMenusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataMenusComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DataMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
