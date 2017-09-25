import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ArticleComponent }  from './article.component';
import { ArticleService } from './article.service';

@NgModule({
  imports: [     
        BrowserModule,
	HttpModule,
	ReactiveFormsModule
  ],
  declarations: [
	ArticleComponent
  ],
  providers: [
        ArticleService
  ],
  bootstrap: [
        ArticleComponent
  ]
})
export class ArticleModule { }