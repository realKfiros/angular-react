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
import * as React from 'react';
import * as ReactDom from 'react-dom';

const containerElementName = '<%= classify(name) %>';

@Component({
    selector: `app-<%= dasherize(name) %>`,
    template: `<span #<%= classify(name) %></span>`,
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
        ReactDom.render(<<%= classify(name) %> />, this.containerRef.nativeElement);
    }
}