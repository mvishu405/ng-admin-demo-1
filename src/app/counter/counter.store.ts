import { ComponentStore } from '@ngrx/component-store';

export interface CounterState {
    count: number;
}

export class CounterStore extends ComponentStore<CounterState> {
    readonly count$ = this.select((state: CounterState) => state.count);

    constructor() {
        super({ count: 0 });
    }

    readonly increment = this.updater((state: CounterState) => ({
        count: state.count + 1,
    }));

    readonly decrement = this.updater((state: CounterState) => ({
        count: state.count - 1,
    }));

    readonly reset = this.updater((state: CounterState) => ({
        count: 0,
    }));
}
