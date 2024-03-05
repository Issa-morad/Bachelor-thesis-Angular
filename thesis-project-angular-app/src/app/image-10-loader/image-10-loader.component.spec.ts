import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Image10LoaderComponent } from './image-10-loader.component';

describe('Image10LoaderComponent', () => {
  let component: Image10LoaderComponent;
  let fixture: ComponentFixture<Image10LoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Image10LoaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Image10LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
