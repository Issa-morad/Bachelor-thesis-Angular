import { Routes } from '@angular/router';

import { AudioComponent } from './audio/audio.component';
import { TextComponent } from './text/text.component';
import { ImageLoaderComponent } from './image-loader/image-loader.component';
import { VideoLoaderComponent } from './video-loader/video-loader.component';
import { StartComponent } from './start/start.component';

const amounts: number[] = [10,20,50,80]

export const routes: Routes = [
    { path: '', component: StartComponent },
    { path: 'audio', component: AudioComponent },
    { path: 'text', component: TextComponent },
    { path: 'load-images/10', component: ImageLoaderComponent, data: { loadAmount: 10 }},
    { path: 'load-images/20', component: ImageLoaderComponent, data: { loadAmount: 20 }},
    { path: 'load-images/50', component: ImageLoaderComponent, data: { loadAmount: 50 }},
    { path: 'load-images/80', component: ImageLoaderComponent, data: { loadAmount: 80 }},
    { path: 'load-videos/10', component: VideoLoaderComponent, data: { loadAmount: 10 }},
    { path: 'load-videos/20', component: VideoLoaderComponent, data: { loadAmount: 20 }},
    { path: 'load-videos/50', component: VideoLoaderComponent, data: { loadAmount: 50 }},
    { path: 'load-videos/80', component: VideoLoaderComponent, data: { loadAmount: 80 }},
    { path: '**', redirectTo: '', pathMatch: 'full'},
];
