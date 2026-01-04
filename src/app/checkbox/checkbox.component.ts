import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  imports: [CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CheckboxComponent,
      multi: true
    }
  ]
})
export class CheckboxComponent implements ControlValueAccessor {
  value = false;
  disabled = false;

  onChange!: (value: boolean) => void;
  onTouched!: () => void;

  writeValue(obj: any): void {
    // initial value incoming from formControl definition
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    // value Change
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    //focus
    if (this.disabled) return
    this.onTouched = fn
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  public setValue() {
    if (this.disabled) return
    this.value = !this.value;
    this.onChange(this.value)
    this.onTouched();
  }
}
