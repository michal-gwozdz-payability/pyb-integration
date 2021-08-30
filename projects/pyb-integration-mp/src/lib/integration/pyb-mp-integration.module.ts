import {ApplicationRef, DoBootstrap, Injector, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PybMpIntegrationComponent } from './pyb-mp-integration.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    PybMpIntegrationComponent
  ],
  exports: [
    PybMpIntegrationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PybMpIntegrationModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const integrationComponent = createCustomElement(PybMpIntegrationComponent, {injector: this.injector});
    customElements.define('pyb-mp-integration', integrationComponent);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}
