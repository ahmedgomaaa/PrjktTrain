import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanginghomeComponent } from './langinghome.component';

describe('LanginghomeComponent', () => {
  let component: LanginghomeComponent;
  let fixture: ComponentFixture<LanginghomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanginghomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanginghomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
