import { Component, inject } from '@angular/core';
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
  showLeak = false

  form: FormGroup = this.fb.group(
    {
      name: new FormControl(),
      isTall: new FormControl({ value: true, disabled: false })
    }
  );

  log() {
    console.info(this.form.value)
  }
}
