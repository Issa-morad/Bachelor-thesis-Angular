import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Video10LoaderComponent } from './video-10-loader.component';

describe('Video10LoaderComponent', () => {
  let component: Video10LoaderComponent;
  let fixture: ComponentFixture<Video10LoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Video10LoaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Video10LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
