import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIdoComponent } from './what-ido.component';

describe('WhatIdoComponent', () => {
  let component: WhatIdoComponent;
  let fixture: ComponentFixture<WhatIdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIdoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
