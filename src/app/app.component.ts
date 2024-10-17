import { Component, OnInit, Renderer2 } from '@angular/core';
import range from 'lodash-es/range';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  backgrounds = range(1, 20);
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    const randomImage =
      this.backgrounds[Math.floor(Math.random() * this.backgrounds.length)];
    this.renderer.setStyle(
      document.body,
      'background-image',
      `url(./assets/images/background-${randomImage}.jpg)`
    );
  }
}
