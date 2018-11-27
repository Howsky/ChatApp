import { TalksModule } from './talks.module';

describe('TalksModule', () => {
  let talksModule: TalksModule;

  beforeEach(() => {
    talksModule = new TalksModule();
  });

  it('should create an instance', () => {
    expect(talksModule).toBeTruthy();
  });
});
