import { Component } from '@angular/core';
import { CounterStore } from './counter.store';
import { Observable } from 'rxjs';

@Component({
    selector: 'ngAdmin-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss'],
    providers: [CounterStore],
})
export class CounterComponent {
    count$: Observable<number> = this._counterStore.count$;

    constructor(private _counterStore: CounterStore) {}

    increment() {
        this._counterStore.increment();
    }

    decrement() {
        this._counterStore.decrement();
    }

    reset() {
        this._counterStore.reset();
    }
}
