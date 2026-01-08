import { Component, ComponentRef, effect, inject, inputBinding, OnDestroy, OnInit, outputBinding, signal, twoWayBinding, ViewContainerRef } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicallyRenderedComponent } from './dynamically-rendered/dynamically-rendered.component';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  vcr = inject(ViewContainerRef)
  #componentRef: ComponentRef<DynamicallyRenderedComponent> | undefined;
  nigga = signal<string>('init nigga');

  constructor() {
    effect(() => {
      const niggaValue = this.nigga()
      console.log(niggaValue)
    })
  }

  ngOnInit(): void {
    this.#componentRef = this.vcr.createComponent(DynamicallyRenderedComponent, {
      bindings: [
        inputBinding('title', () => 'Meow'),
        outputBinding('state', console.log),
        twoWayBinding('nigga', this.nigga)
      ]
    })

    setTimeout(() => {
      this.ngOnDestroy()
    }, 7_000);
  }

  ngOnDestroy(): void {
    this.#componentRef?.destroy()
    this.#componentRef = undefined
  }
}
