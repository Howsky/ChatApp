import { CountUndisplayedPipe } from './count-undisplayed.pipe';

describe('CountUndisplayedPipe', () => {
  it('create an instance', () => {
    const pipe = new CountUndisplayedPipe();
    expect(pipe).toBeTruthy();
  });
});
