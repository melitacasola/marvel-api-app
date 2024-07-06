import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicDetailFormComponent } from './comic-detail-form.component';

describe('ComicDetailFormComponent', () => {
  let component: ComicDetailFormComponent;
  let fixture: ComponentFixture<ComicDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComicDetailFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComicDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
