import {SharedModule} from './../../shared/shared.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AgmCoreModule} from '@agm/core';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './pages/home/home.component';
// import {GoogleMapsAPIWrapper} from '@agm/core';
import {
  MatButtonModule,
  MatInputModule,
  MatIconModule,
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {CustomMaterialModule} from 'src/app/shared/custom-material.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    HttpClientModule,
    CustomMaterialModule,
    // GoogleMapsAPIWrapper,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBjfV7yVo9IfovvviqsvFCnSubbWAarz84',
      libraries: ['places'],
    }),
  ],
})
export class HomeModule {}
