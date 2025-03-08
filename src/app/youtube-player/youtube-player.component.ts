import { AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-youtube-player',
  standalone: true,
  imports: [],
  templateUrl: './youtube-player.component.html',
  styleUrl: './youtube-player.component.css'
})

  export class YoutubePlayerComponent implements AfterViewInit, OnDestroy {
    private player: any;
    private YT: any;
    private videoId = 'dQw4w9WgXcQ'; // Substitua pelo ID do vídeo do YouTube que deseja reproduzir
  
    ngAfterViewInit(): void {
      // Inicializa o player após a view ser carregada
      this.initPlayer();
    }
  
    ngOnDestroy(): void {
      // Destrói o player quando o componente é destruído
      if (this.player) {
        this.player.destroy();
      }
    }
  
    initPlayer(): void {
      // Verifica se a API do YouTube está carregada
      if (!window['YT']) {
        console.error('YouTube API not loaded.');
        return;
      }
  
      // Cria o player
      this.player = new window['YT'].Player('youtube-player', {
        height: '360',
        width: '640',
        videoId: this.videoId,
        playerVars: {
          autoplay: 0, // Não autoplay por padrão
          controls: 1, // Mostrar controles do player
          modestbranding: 1, // Reduzir branding do YouTube
          rel: 0 // Não mostrar vídeos relacionados ao final
        },
        events: {
          onReady: (event: any) => this.onPlayerReady(event),
          onStateChange: (event: any) => this.onPlayerStateChange(event)
        }
      });
    }
  
    onPlayerReady(event: any): void {
      console.log('Player is ready.');
      // Você pode adicionar lógica adicional aqui, como iniciar o vídeo automaticamente
      // event.target.playVideo();
    }
  
    onPlayerStateChange(event: any): void {
      console.log('Player state changed:', event.data);
      // Você pode adicionar lógica adicional aqui com base no estado do player
    }
}
