/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import "bootstrap/dist/js/bootstrap.bundle";

bootstrapApplication(AppComponent).catch((err) => console.error(err));