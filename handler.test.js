import Handler from './handler';

describe('random numbers', () => {

  it('handles', () => {
    let subject = new Handler()
    expect(subject.handle).toBeDefined();
  })

  it('handles as string', () => {
    let subject = new Handler()
    expect(subject["handle"]).toBeDefined();
    expect(typeof subject['handle']).toBe('function');
  })

  it('calls as string', () => {
    let subject = new Handler()
    expect(subject["handle"].apply(null, [{}, null])).toBeFalsy();
  })

  it('calls from data', () => {
    let subject = new Handler()
    expect(subject["handle"].apply(subject, [{command: "create"}, null])).toBeTruthy();
  })

  it('false when command not exists', () => {
    let subject = new Handler()
    expect(subject["handle"].apply(subject, [{command: "nonExistent"}, null])).toBeFalsy();
  })

})