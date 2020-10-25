import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutListComponent } from './put-list.component';

describe('PutListComponent', () => {
  let component: PutListComponent;
  let fixture: ComponentFixture<PutListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PutListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
