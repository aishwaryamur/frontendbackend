import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { ScoreDetailsComponent } from './components/score-details/score-details.component';
import { SearchQuizComponent } from './components/search-quiz/search-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    
    ScoreDetailsComponent,
    SearchQuizComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
