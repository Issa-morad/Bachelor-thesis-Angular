import { Routes } from '@angular/router';
import { TempComp1Component } from './temp-comp-1/temp-comp-1.component';
import { TempComp2Component } from './temp-comp-2/temp-comp-2.component';
import { Image10LoaderComponent } from './image-10-loader/image-10-loader.component';
import { Video10LoaderComponent } from './video-10-loader/video-10-loader.component';

export const routes: Routes = [
    { path: '', redirectTo: '/temp1', pathMatch: 'full'},
    { path: 'temp1', component: TempComp1Component },
    { path: 'temp2', component: TempComp2Component },
    { path: 'load-ten-images', component: Image10LoaderComponent},
    { path: 'load-ten-videos', component: Video10LoaderComponent}
];
