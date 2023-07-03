import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const NewsActions = createActionGroup({
  source: 'News',
  events: {
    'Load Newss': emptyProps(),
    'Load Newss Success': props<{ data: unknown }>(),
    'Load Newss Failure': props<{ error: unknown }>(),
  }
});
