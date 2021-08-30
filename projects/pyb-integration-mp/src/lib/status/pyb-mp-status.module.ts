import {ApplicationRef, DoBootstrap, Injector, NgModule} from '@angular/core';
import {PybMpStatusComponent} from './pyb-mp-status.component';
import {createCustomElement} from '@angular/elements';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    PybMpStatusComponent
  ],
  exports: [
    PybMpStatusComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PybMpStatusModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const statusComponent = createCustomElement(PybMpStatusComponent, {injector: this.injector});
    customElements.define('pyb-mp-status', statusComponent);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}
