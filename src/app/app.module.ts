import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { WelcomeComponent } from './welcome/welcome.component';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';
@NgModule({
    declarations: [AppComponent, WelcomeComponent, ReactiveFormDemoComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule,

        /** Store Configuration */
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: false,
            autoPause: true,
            features: {
                pause: false,
                lock: true,
                persist: true,
            },
        }),

        /** Routing Configuration IT should be last in imports array */
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
