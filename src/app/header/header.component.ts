import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() recipesEvent: EventEmitter<string> = new EventEmitter();

  featureClick(feature: string){
    this.recipesEvent.emit(feature);
  }
}
