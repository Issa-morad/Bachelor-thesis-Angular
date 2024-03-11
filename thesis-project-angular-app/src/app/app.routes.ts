import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { AudioComponent } from './audio/audio.component';
import { TextComponent } from './text/text.component';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full'},
    { path: '', component: StartComponent },
    {path:'audio', component: AudioComponent},
    {path: 'text', component: TextComponent}
];
