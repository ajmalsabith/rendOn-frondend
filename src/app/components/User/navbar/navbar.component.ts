import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  
  @Output() updateDatashow = new EventEmitter<boolean>();

  goToProfilePage() {
    this.updateDatashow.emit(true);
  }
}
