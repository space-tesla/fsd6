import { Component } from '@angular/core';


@Component({

  selector: 'app-click-event',

  templateUrl: './click-event.component.html',

  styleUrls: ['./click-event.component.css']

})

export class ClickEventComponent {

  showAlert() {

    alert("Button Clicked! ng-click directive equivalent in Angular 16.");

  }

}