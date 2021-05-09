import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSplitProgressbarComponent } from './ngx-split-progressbar.component';

describe('NgxSplitProgressbarComponent', () => {
  let component: NgxSplitProgressbarComponent;
  let fixture: ComponentFixture<NgxSplitProgressbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSplitProgressbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSplitProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
