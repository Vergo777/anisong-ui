import { CallbackPipe } from './common/callback.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { NavbarComponent } from './navbar/navbar.component';
import { AnisongOverviewComponent } from './anisong-overview/anisong-overview.component';
import { AnisongOverviewEventComponent } from './anisong-overview/anisong-overview-event/anisong-overview-event.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LinkyModule } from 'ngx-linky';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnisongOverviewComponent,
    AnisongOverviewEventComponent,
    CallbackPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FlexLayoutModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    LinkyModule
  ],
  providers: [CallbackPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
