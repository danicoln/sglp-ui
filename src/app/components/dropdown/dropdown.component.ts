import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ]
})
export class DropdownComponent implements ControlValueAccessor {

  @Input() label?: string;
  @Input() options?: any[];
  @Input() placeholder?: string;
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

  private _valorSelecionado: any;
  onChange: any = () => {};
  onTouched: any = () => {};

  constructor() { }

  get valorSelecionado():any {
    return this._valorSelecionado;
  }

  set valorSelecionado(value: any) {
    if (value !== this._valorSelecionado) {
      this._valorSelecionado = value;
      this.onChange(value);
      this.onTouched();
      this.valueChange.emit(value);
    }
  }

  writeValue(obj: any): void {
    this._valorSelecionado = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
 

}
