import * as fromNews from '../reducers/news.reducer';
import { selectNewsState } from './news.selectors';

describe('News Selectors', () => {
  it('should select the feature state', () => {
    const result = selectNewsState({
      [fromNews.newsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
