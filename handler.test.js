import Handler from './handler';

describe('random numbers', () => {
  it('handles', () => {
    let subject = new Handler()
    expect(subject.handle).toBeDefined();
  })
})
