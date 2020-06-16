
import { enableProdMode, NgZone } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';

if (environment.production) {
  enableProdMode();
}

// This is the bootstrap for our Single-Spa micro-frontend --kyle
const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    singleSpaPropsSubject.next(singleSpaProps);
    return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule);
  },
  template: '<dashboard-root />',
  Router,
  NgZone: NgZone,
});

// These functions are required by every single-spa micro-front end to control the lifecycle --kyle
export const bootstrap = lifecycles.bootstrap;    // Get everything setup to run
export const mount = lifecycles.mount;            // Do whatever is required to get the bits loaded and start the application
export const unmount = lifecycles.unmount;        // Do whaever is needed to dispose the application