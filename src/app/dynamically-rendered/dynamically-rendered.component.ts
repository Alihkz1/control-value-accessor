import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-dynamically-rendered',
  imports: [],
  templateUrl: './dynamically-rendered.component.html',
  styleUrl: './dynamically-rendered.component.scss'
})
export class DynamicallyRenderedComponent {
  title = input<string>();

  state = output()

  niggaChange = output<string>()
  nigga = input<string>();

  constructor() {
    setTimeout(() => {
      this.niggaChange.emit("nigga is big now!")
      this.state.emit()
    }, 2000);
  }
}
