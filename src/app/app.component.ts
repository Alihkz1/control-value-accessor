import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from './checkbox/checkbox.component';

@Component({
  selector: 'app-root',
  imports: [CheckboxComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'controlValueAccessor';
  fb = inject(FormBuilder);

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
