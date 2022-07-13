import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { WordleComponent } from './wordle/wordle.component';
import { GraphQLQueryService } from './graphql/graphql.queries';

@NgModule({
  declarations: [
    AppComponent,
    WordleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [GraphQLQueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
