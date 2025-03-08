import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-youtube-video-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './youtube-video-list.component.html',
  styleUrl: './youtube-video-list.component.css'
})
export class YoutubeVideoListComponent {
  videos = [
    { title: 'Título do Vídeo 1', channel: 'Nome do Canal 1', duration: '5:00' },
    { title: 'Título do Vídeo 2', channel: 'Nome do Canal 2', duration: '10:00' },
    { title: 'Título do Vídeo 3', channel: 'Nome do Canal 3', duration: '15:00' },
  ];
}
