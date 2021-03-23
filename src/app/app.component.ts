import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  backgrounds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    const randomImage = this.backgrounds[
      Math.floor(Math.random() * this.backgrounds.length)
    ];
    this.renderer.setStyle(
      document.body,
      'background-image',
      `url(./assets/images/background-${randomImage}.jpg)`
    );
  }
}
