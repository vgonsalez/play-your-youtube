import { YoutubeVideoListComponent } from './youtube-video-list/youtube-video-list.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', component: YoutubeVideoListComponent }, // Rota padrão
  { path: 'videos', component: YoutubeVideoListComponent },
];
