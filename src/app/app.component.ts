import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from './store/reducers';
import * as fromApp from './store/app/index';
@Component({
    selector: 'ngAdmin-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title$!: Observable<string>;

    constructor(private store: Store<State>) {}

    ngOnInit(): void {
        this.title$ = this.store.select(fromApp.selectAppStateName);
    }
}
