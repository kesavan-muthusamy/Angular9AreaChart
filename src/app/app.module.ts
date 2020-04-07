import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartAllModule, AreaSeriesService } from '@syncfusion/ej2-angular-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartesianChartComponent } from './cartesian-chart/cartesian-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    CartesianChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartAllModule
  ],
  providers: [],
  bootstrap: [CartesianChartComponent, AppComponent]
})
export class AppModule { }
