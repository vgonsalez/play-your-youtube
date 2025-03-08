import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { YoutubeVideoListComponent } from './youtube-video-list/youtube-video-list.component';
import { YoutubePlayerComponent } from "./youtube-player/youtube-player.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, YoutubeVideoListComponent, CommonModule, YoutubePlayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'play-your-youtube';
}
