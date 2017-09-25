
# counter.component.html
```<div>
<p> Number : {{counter}}</p>  
<button (click)="increment()">increment</button>
<button (click)="decrement()">decrement</button>
</div>
```

# counter.component.ts
```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  counter: number;
  constructor() { this.counter=1;}

  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
}
```
# app.component.ts
```
import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   template: `
		<app-counter></app-counter>
             `
})
export class AppComponent { 
} 
```
# app.module.ts
```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ArticleComponent }  from './article/article.component';
import { ArticleService } from './article/article.service';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  imports: [     
        BrowserModule,
	HttpModule,
	ReactiveFormsModule
  ],
  declarations: [
        AppComponent,
	ArticleComponent,
	CounterComponent
  ],
  providers: [
        ArticleService
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { }
```
# counter.component.spec.ts
```
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

  it('should increment the counter number by one', () => {
    const intialValue=component.counter;
    component.increment();
    const newValue=component.counter;
    expect(newValue).toBeGreaterThan(intialValue);
  });

  it('should decrement the counter number by one', () => {
    const intialValue=component.counter;
    component.decrement();
    fixture.detectChanges();
    const newValue=component.counter;
    expect(newValue).toBeLessThan(intialValue);
  });
  
  it('should display the counter number on screen,after being incremented by one', () => {
    component.increment();
    fixture.detectChanges();
    expect(htmlElement.textContent).toEqual('Number: 2');
  });

  it('should display the counter number on screen,after being decremented by one', () => {
    component.decrement();
    fixture.detectChanges();
    expect(htmlElement.textContent).toEqual('Number: 0');
  });

  it('should display the current number of the counter', () => {
    expect(htmlElement.textContent).toEqual('Number: 1');
  });
});

```
# Ngfixme

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
