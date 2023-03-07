import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.scss']
})
export class ComicCardComponent {
  @Input() comic: any;

  ngOnInit(){  }

  getImage(){
    return 'background-image: url(' + this.comic.thumbnail.path +'.'+ this.comic.thumbnail.extension + ')';
  }

  mouseMove(event: any){
    let card = document.getElementById(this.comic.id) as HTMLElement;
    let height = card.clientHeight;
    let width = card.clientWidth;
    const {layerX, layerY} = event;

    let yRotation =(layerX - width/2)/width * 20;
    let xRotation = (layerY - height/2)/height * 20;

    let interactiveStyle = `
    perspective(500px)
    scale(1.07)
    rotateX(${xRotation}deg)
    rotateY(${yRotation}deg)
    `;

    card.style.transform = interactiveStyle;
  }


  mouseLeave(){
    let card = document.getElementById(this.comic.id) as HTMLElement;
    card.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
  }
}
