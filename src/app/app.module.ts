import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { QuoteComponent } from './Components/quote/quote.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { SkillComponent } from './Pages/skill/skill.component';
import { WorkComponent } from './Pages/work/work.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { TempHomeComponent } from './Pages/temp-home/temp-home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { OpenMapComponent } from './Components/open-map/open-map.component';
import { LeafMapComponent } from './Components/leaf-map/leaf-map.component';
import { SkillsChartComponent } from './Components/skills-chart/skills-chart.component';
import { DonutDrillComponent } from './Components/donut-drill/donut-drill.component';
import { MapBoxComponent } from './Components/map-box/map-box.component';
import { NavWrapperComponent } from './Pages/nav-wrapper/nav-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuoteComponent,
    HomeComponent,
    AboutComponent,
    SkillComponent,
    WorkComponent,
    ContactComponent,
    TempHomeComponent,
    CalendarComponent,
    OpenMapComponent,
    LeafMapComponent,
    SkillsChartComponent,
    DonutDrillComponent,
    MapBoxComponent,
    NavWrapperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
