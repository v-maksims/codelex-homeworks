import { validateEmail, validatePassword, validateUsername } from './validation';

describe('validateUsername', () => {
  it('should return false if 1 letter', () => {
    const result = validateUsername('a');
    expect(result).toBeFalsy();
  });

  it('should return false if has spaces', () => {
    const result = validateUsername(' ');
    expect(result).toBeFalsy();
  });

  it('should return false if has spaces and text', () => {
    const result = validateUsername(' asd asdas ada');
    expect(result).toBeFalsy();
  });

  it('should return false if has over 50 letters', () => {
    const result = validateUsername('ssssssssssssssssssssssssssssssssssssssssssssssssssa');
    expect(result).toBeFalsy();
  });

  it('should return false if has numbers letters', () => {
    const result = validateUsername('boy392');
    expect(result).toBeFalsy();
  });

  it('should return false if has numbers', () => {
    const result = validateUsername('392');
    expect(result).toBeFalsy();
  });

  it('should return false if has symbols with letters', () => {
    const result = validateUsername('sdfsdf@dsfds!');
    expect(result).toBeFalsy();
  });

  it('should return true if has 2 letters', () => {
    const result = validateUsername('ad');
    expect(result).toBeTruthy();
  });

  it('should return true if has 50 letters', () => {
    const result = validateUsername('ssssssssssssssssssssssssssssssssssssssssssssssssss');
    expect(result).toBeTruthy();
  });

  it('should return true', () => {
    const result = validateUsername('weiss');
    expect(result).toBeTruthy();
  });
});

describe('ValidateEmails', () => {
  it('should return false if is empty', () => {
    const result = validateEmail('');
    expect(result).toBeFalsy();
  });

  it('should return false if has spaces', () => {
    const result = validateEmail('  ');
    expect(result).toBeFalsy();
  });

  it('should return false if has spaces and email', () => {
    const result = validateEmail('  test@gmail.com');
    expect(result).toBeFalsy();
  });

  it('should return false if not email', () => {
    const result = validateEmail('test');
    expect(result).toBeFalsy();
  });

  it('should return false if has text and @ symbol', () => {
    const result = validateEmail('test@');
    expect(result).toBeFalsy();
  });

  it('should return false if has text, @ symbol, .', () => {
    const result = validateEmail('test@.');
    expect(result).toBeFalsy();
  });

  it('should return false if has @ symbol, .', () => {
    const result = validateEmail('@.com');
    expect(result).toBeFalsy();
  });

  it('should return false if has name, @ symbol, without .', () => {
    const result = validateEmail('test@com');
    expect(result).toBeFalsy();
  });

  it('should return false if has email and symbols', () => {
    const result = validateEmail('te!st@gmail.com');
    expect(result).toBeFalsy();
  });

  it('should return true if has correct email', () => {
    const result = validateEmail('test@gmail.com');
    expect(result).toBeTruthy();
  });

  it('should return true if has correct email and numbers', () => {
    const result = validateEmail('test123@gmail.com');
    expect(result).toBeTruthy();
  });
});

describe('validatePassword', () => {
  it('should return false if empty', () => {
    const result = validatePassword('');
    expect(result).toBeFalsy();
  });

  it('should return false if has spaces', () => {
    const result = validatePassword('     ');
    expect(result).toBeFalsy();
  });

  it('should return false if has spaces and letters', () => {
    const result = validatePassword('   sda  ');
    expect(result).toBeFalsy();
  });

  it('should return false if length is 7 or less', () => {
    const result = validatePassword('1234567');
    expect(result).toBeFalsy();
  });

  it('should return false if has only letters', () => {
    const result = validatePassword('qwertyuiop');
    expect(result).toBeFalsy();
  });

  it('should return false if has only numbers', () => {
    const result = validatePassword('123456789');
    expect(result).toBeFalsy();
  });

  it('should return false if has only numbers and letters', () => {
    const result = validatePassword('123456asd');
    expect(result).toBeFalsy();
  });

  it('should return false if has only spec symbol and letters', () => {
    const result = validatePassword('asdasder@');
    expect(result).toBeFalsy();
  });

  it('should return true if password is valid', () => {
    const result = validatePassword('123@fdas');
    expect(result).toBeTruthy();
  });

  it('should return true if password is valid', () => {
    const result = validatePassword('12asd3@fdAs');
    expect(result).toBeTruthy();
  });
});
