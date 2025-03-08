import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { YoutubeVideoListComponent } from './youtube-video-list/youtube-video-list.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', component: YoutubeVideoListComponent }, 
    { path: 'player', component: YoutubePlayerComponent },
  { path: 'videos', component: YoutubeVideoListComponent },
];
