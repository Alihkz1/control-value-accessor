import { Component, OnInit } from '@angular/core';
import { IApp } from './app.interface';
import { appModel } from './app.model';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent extends appModel implements IApp, OnInit {
  appTitle = 'interface adventure';
  canLoad = () => console.log('Hello');

  constructor(){
    super('meow')
  }

  override canModel(): void {
    console.log('appComponent class')
  }

  ngOnInit(): void {
    this.canModel()
  }
}
