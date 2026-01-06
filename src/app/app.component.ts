import { Component, inject, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { MemoryLeakComponent } from './memory-leak/memory-leak.component';

@Component({
  selector: 'app-root',
  imports: [CheckboxComponent, ReactiveFormsModule, MemoryLeakComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'controlValueAccessor';
  fb = inject(FormBuilder);
  vcr = inject(ViewContainerRef);
  showLeak = false

  constructor() { }

  form: FormGroup = this.fb.group(
    {
      name: new FormControl(),
      isTall: new FormControl({ value: true, disabled: false })
    }
  );

  toggle() {
    this.showLeak = !this.showLeak
    if (this.showLeak) {
      const component: any = this.vcr.createComponent(MemoryLeakComponent)
      component.instance.header = 'meow'
    } else {
      this.vcr.clear()
    }
  }
}
