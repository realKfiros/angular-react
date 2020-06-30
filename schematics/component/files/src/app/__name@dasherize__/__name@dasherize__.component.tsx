import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    Output,
    SimpleChanges,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import <%= classify(name) %> from './<%= dasherize(name) %>';
import React from 'react';
import ReactDOM from 'react-dom';

const containerElementName = '<%= classify(name) %>';

@Component({
    selector: `app-<%= dasherize(name) %>`,
    template: `<span #<%= classify(name) %>></span>`,
    styles: [`./<%= dasherize(name) %>.component.css`]
})
export class <%= classify(name) %>Component implements OnChanges, OnDestroy, AfterViewInit {
    @ViewChild(containerElementName, {static: false}) containerRef: ElementRef;

    constructor() {}

    ngOnChanges(changes: SimpleChanges): void {
        this.render();
    }
    
    ngAfterViewInit() {
        this.render();
    }
    
    ngOnDestroy() {
        ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
    }

    private render() {
        ReactDOM.render(<<%= classify(name) %> />, this.containerRef.nativeElement);
    }
}