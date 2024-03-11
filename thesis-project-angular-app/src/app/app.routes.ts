import { Routes } from '@angular/router';
import { TempComp1Component } from './temp-comp-1/temp-comp-1.component';
import { TempComp2Component } from './temp-comp-2/temp-comp-2.component';
import { ImageLoaderComponent } from './image-loader/image-loader.component';
import { VideoLoaderComponent } from './video-loader/video-loader.component';

const amounts: number[] = [10,20,50,80]

export const routes: Routes = [
    { path: '', redirectTo: '/temp1', pathMatch: 'full'},
    { path: 'temp1', component: TempComp1Component },
    { path: 'temp2', component: TempComp2Component },
    { path: 'load-images/10', component: ImageLoaderComponent, data: { loadAmount: 10 }},
    { path: 'load-images/20', component: ImageLoaderComponent, data: { loadAmount: 20 }},
    { path: 'load-images/50', component: ImageLoaderComponent, data: { loadAmount: 50 }},
    { path: 'load-images/80', component: ImageLoaderComponent, data: { loadAmount: 80 }},
    { path: 'load-videos/10', component: VideoLoaderComponent, data: { loadAmount: 10 }},
    { path: 'load-videos/20', component: VideoLoaderComponent, data: { loadAmount: 20 }},
    { path: 'load-videos/50', component: VideoLoaderComponent, data: { loadAmount: 50 }},
    { path: 'load-videos/80', component: VideoLoaderComponent, data: { loadAmount: 80 }}
];
