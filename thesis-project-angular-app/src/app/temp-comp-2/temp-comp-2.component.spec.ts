import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempComp2Component } from './temp-comp-2.component';

describe('TempComp2Component', () => {
  let component: TempComp2Component;
  let fixture: ComponentFixture<TempComp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempComp2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TempComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
