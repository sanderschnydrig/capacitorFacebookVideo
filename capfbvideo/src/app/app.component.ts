import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  @ViewChild('container') container: ElementRef
  @Input() storyElement
  url = 'https://www.facebook.com/beatrice.egli.offiziell/videos/2953734684880605/'

  constructor() { }

  ngAfterViewInit() {
    if (window['FB']) {
      window['FB'].XFBML.parse(this.container.nativeElement)
    }
  }
}
