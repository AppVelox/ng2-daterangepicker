"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var DateRangePickerDirective = (function () {
    function DateRangePickerDirective(elementRef) {
        this.elementRef = elementRef;
        this.options = {};
        this.selected = new core_1.EventEmitter();
    }
    DateRangePickerDirective.prototype.ngOnInit = function () {
        $(this.elementRef.nativeElement)
            .daterangepicker(this.options, this.dateCallback.bind(this));
    };
    DateRangePickerDirective.prototype.dateCallback = function (start, end, label) {
        var message = "" + start.format('DD/MM/YYYY') + " " + end.format('DD/MM/YYYY');
        this.selected.emit(message);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DateRangePickerDirective.prototype, "options", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DateRangePickerDirective.prototype, "selected", void 0);
    DateRangePickerDirective = __decorate([
        core_1.Directive({
            selector: '[daterangepicker]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], DateRangePickerDirective);
    return DateRangePickerDirective;
}());
exports.DateRangePickerDirective = DateRangePickerDirective;
//# sourceMappingURL=../../src/src/app/daterangepicker.directive.js.map
