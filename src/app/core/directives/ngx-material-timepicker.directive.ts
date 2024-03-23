import { Directive, ElementRef, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { NgxMaterialTimepickerComponent } from 'ngx-material-timepicker';
import { FormControl, NgControl } from '@angular/forms';

@Directive({
    selector: '[ngxMaterialTimepicker]',
    providers: [{ provide: MatFormFieldControl, useExisting: NgxMaterialTimepickerDirective }]
})
export class NgxMaterialTimepickerDirective implements MatFormFieldControl<string>, OnInit, OnDestroy {
    static nextId = 0;
    @HostBinding() id = `ngx-material-timepicker-${NgxMaterialTimepickerDirective.nextId++}`;
    stateChanges = new Subject<void>();
    focused = false;

    @Input('aria-describedby') userAriaDescribedBy?: string;
    @HostBinding('attr.aria-describedby') describedBy = '';

    controlType = 'ngx-material-timepicker';
    autofilled?: boolean;

    // Placeholder for the timepicker value
    private _value: string | null = null;

    // Implement the required properties
    get empty() {
        return !this._value;
    }

    get shouldLabelFloat() {
        return this.focused || !this.empty;
    }

    @Input() required: boolean = false;
    @Input() disabled: boolean = false;
    @Input() placeholder: any | undefined;
    @HostBinding('class.floating') get shouldPlaceholderFloat() {
        return this.shouldLabelFloat;
    }

    // Error state can be determined by the form control status
    get errorState(): boolean {
        return this.ngControl.errors !== null && !!this.ngControl.errors;
    }

    constructor(
        private elRef: ElementRef<HTMLElement>,
        public ngControl: NgControl
    ) {
        if (this.ngControl != null) {
            // Set the value accessor directly (instead of providing NG_VALUE_ACCESSOR) to avoid Angular thinking it's a multi-provider
            this.ngControl.valueAccessor = this;
        }
    }

    ngOnInit() {
        // Custom initialization
    }

    ngOnDestroy() {
        this.stateChanges.complete();
    }

    // Utility methods
    setDescribedByIds(ids: string[]): void {
        this.describedBy = ids.join(' ');
    }

    onContainerClick(event: MouseEvent): void {
        // Logic to handle the container click event
    }

    // Methods related to form control value changes
    writeValue(value: string | null): void {
        this._value = value;
        this.stateChanges.next();
    }

    registerOnChange(fn: any): void {
        // Your logic to update the model upon change
    }

    registerOnTouched(fn: any): void {
        // Your logic for when the component is touched
    }

    setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
        // Your logic to disable the input
    }

    @Input()
    get value(): string | null {
        return this._value;
    }

    set value(time: string | null) {
        this._value = time;
        this.stateChanges.next();
    }
}
