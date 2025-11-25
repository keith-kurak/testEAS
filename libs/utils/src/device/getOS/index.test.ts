import {getOS} from '.';

jest.mock('react-native', () => ({
  Platform: {
    OS: 'android_from_mock',
    select: () => null,
  },
}));

describe('getOS', () => {
  it('should return correct value', () => {
    const result = getOS();
    expect(result).toEqual('android_from_mock');
  });
});
