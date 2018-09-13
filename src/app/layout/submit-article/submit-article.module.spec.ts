import { SubmitArticleModule } from './submit-article.module';

describe('SubmitArticleModule', () => {
  let submitArticleModule: SubmitArticleModule;

  beforeEach(() => {
    submitArticleModule = new SubmitArticleModule();
  });

  it('should create an instance', () => {
    expect(submitArticleModule).toBeTruthy();
  });
});
