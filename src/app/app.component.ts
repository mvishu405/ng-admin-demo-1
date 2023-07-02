import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState, selectApp, selectAppName } from './store/app.state';
import { appInitialized } from './store/app.actions';
import { Observable } from 'rxjs';
@Component({
    selector: 'ngAdmin-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title$!: Observable<string>;

    constructor(private store: Store<RootState>) {}

    ngOnInit(): void {
        this.title$ = this.store.select(selectAppName);
    }
}
