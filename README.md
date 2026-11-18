# ControlValueAccessor — Custom Angular Checkbox

A focused Angular example showing how a custom checkbox connects to a reactive form through `ControlValueAccessor`. Follow the value from the parent `FormControl` into the component and back through registered change and touch callbacks.

**[Explore the source →](https://github.com/Alihkz1/control-value-accessor)**

## Experience

The demo contains a name input, a custom **isTall** checkbox, and a **Log Form Value** button. The checkbox starts checked. Interacting with the form marks it as touched, enabling the button, which prints the current form value in the browser console.

The interface is deliberately small so the form integration stays easy to inspect. This repository is a runnable learning example, not a published component package.

## Features

- **Custom form control:** an `app-checkbox` component implements `ControlValueAccessor`.
- **Reactive forms integration:** binds to the parent form using `formControlName="isTall"`.
- **Model-to-view updates:** `writeValue()` updates the component's checked value.
- **View-to-model updates:** the checkbox change handler toggles its value and calls the registered change callback.
- **Touched state:** changing the checkbox calls the registered touch callback.
- **Disabled state:** `setDisabledState()` updates the native input and prevents toggling while disabled.
- **Standalone components:** the parent imports the checkbox and `ReactiveFormsModule` directly.
- **Console inspection:** logs the parent form's current values without submitting data to a server.

## Built with

| Technology | Purpose |
| --- | --- |
| Angular 19.2 | Standalone components and application bootstrap |
| Angular Reactive Forms | Parent form model and control binding |
| ControlValueAccessor / NG_VALUE_ACCESSOR | Bridge between the form model and custom checkbox |
| TypeScript | Component logic and form integration |
| HTML / SCSS | Native input markup and demo layout |
| Angular CLI | Local development tooling |

## Run locally

```bash
git clone https://github.com/Alihkz1/control-value-accessor.git
cd control-value-accessor
npm ci
npm start
```

Open **[localhost:4200](http://localhost:4200)**. Open the browser's developer console to see values printed by **Log Form Value**.

No backend, database, environment variables, or API credentials are required.

## Try the demo

1. Observe that the custom checkbox starts checked.
2. Toggle it to update the `isTall` control and mark the form as touched.
3. Enter a name in the text input.
4. Select **Log Form Value** to inspect the current values.

Example console output after entering a name and unchecking the checkbox:

```ts
{
  name: 'Ali',
  isTall: false
}
```

The button depends on `form.touched`, not validation or whether a value has changed. The native name input can also mark the form as touched when it loses focus. No validators are configured in this demo.

## Project structure

```text
control-value-accessor/
├── src/
│   ├── app/
│   │   ├── checkbox/
│   │   │   ├── checkbox.component.ts     # ControlValueAccessor implementation
│   │   │   ├── checkbox.component.html   # Native checkbox binding
│   │   │   └── checkbox.component.scss   # Checkbox stylesheet, currently empty
│   │   ├── app.component.ts              # Parent reactive form and console logger
│   │   ├── app.component.html            # Demo form and action button
│   │   ├── app.component.scss            # Centered demo layout
│   │   ├── app.config.ts                 # Application providers
│   │   └── app.routes.ts                 # Route configuration, currently empty
│   ├── main.ts                           # Application bootstrap
│   ├── index.html                        # HTML entry point
│   └── styles.scss                       # Global stylesheet
├── angular.json                          # Angular CLI configuration
├── package.json                          # Dependencies and scripts
└── README.md
```

## How the value accessor works

The checkbox registers itself as a value accessor through its component providers:

```ts
providers: [
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: CheckboxComponent,
    multi: true
  }
]
```

The parent can then use it as a form control:

```html
<form [formGroup]="form">
  <input type="text" formControlName="name">
  <app-checkbox formControlName="isTall"></app-checkbox>
</form>
```

| Method | Behavior in this example |
| --- | --- |
| `writeValue(value)` | Copies the form's value into the component |
| `registerOnChange(fn)` | Stores the callback used to update the parent control |
| `registerOnTouched(fn)` | Stores the touch callback unless the component is already disabled |
| `setDisabledState(isDisabled)` | Updates the component's disabled flag |
| `setValue()` | Toggles the boolean value, then invokes change and touch callbacks |

The template binds `[checked]` and `[disabled]` to component state. Its native `(change)` event calls `setValue()`. The component reports touch on change, rather than on blur.

## Experiment with the form

The existing parent form initializes `isTall` with `true`. To explore model-driven updates, these calls can be added to the parent component:

```ts
this.form.get('isTall')?.setValue(false);
this.form.get('isTall')?.disable();
this.form.get('isTall')?.enable();
```

These are example calls, not additional buttons included in the interface.

## Current scope

- Form values live in memory and reset on page reload.
- The checkbox template uses a fixed `id="check"`; multiple instances need unique IDs and accessible labels before reuse.
- Change and touch callbacks are assigned during form setup, so this component expects to be used with Angular forms.
- The current touch-registration guard skips registration when already disabled; review that behavior before adapting it for controls initialized as disabled.
- The demo includes no submission workflow, validation messages, or additional routes.

## Customize

| Change | File |
| --- | --- |
| Parent fields, initial values, or validators | `src/app/app.component.ts` |
| Demo labels and actions | `src/app/app.component.html` |
| Form spacing and layout | `src/app/app.component.scss` |
| Value-accessor callbacks and disabled behavior | `src/app/checkbox/checkbox.component.ts` |
| Checkbox markup, IDs, and accessible labels | `src/app/checkbox/checkbox.component.html` |
| Checkbox appearance | `src/app/checkbox/checkbox.component.scss` |

## Author

**Ali Hosseinkhani**

- [GitHub — alihkz1](https://github.com/alihkz1)
- [LinkedIn — alihkz](https://www.linkedin.com/in/alihkz/)
- [Instagram — alihkz](https://www.instagram.com/alihkz/)
- [Telegram — alihkz](https://t.me/alihkz)
