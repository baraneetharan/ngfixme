import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let debugElement: DebugElement;
  let htmlElement:HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement=fixture.debugElement.query(By.css('p'));
    htmlElement=debugElement.nativeElement;
  });

  it('should display the current number of the counter', () => {
    expect(htmlElement.textContent).toEqual('Number: 1');
  });

  it('should increment the counter number by one', () => {
    const intialValue = component.counter; 
    component.increment();
    const newValue = component.counter; 
    expect(newValue).toBeGreaterThan(intialValue);
    });

    it('should decrement the counter number by one', () => {
      const intialValue = component.counter; 
      component.decrement();
      fixture.detectChanges(); 
      const newValue = component.counter;
      expect(newValue).toBeLessThan(intialValue);
      });  
});
