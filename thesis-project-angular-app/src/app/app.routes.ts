import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { VideoComponent } from './video/video.component';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full'},
    { path: '', component: StartComponent },
    {path:'video', component: VideoComponent}
];
