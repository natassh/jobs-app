import { getTimeDifference } from '../getTimeDifference';

describe('getTimeDifference', () => {
    beforeAll(() => {
        jest.useFakeTimers('modern');
        jest.setSystemTime(new Date(2021, 1, 23));
    });
    
    afterAll(() => {
        jest.useRealTimers();
    });

  it('should return an array with the filtered jobs', () => {
    // Arrenge 
    const date = "Thu Feb 20 10:02:01 UTC 2021";
    const expected ="3 d ago"

    // Act
    const timeAgoDate = getTimeDifference(date);

    // Assert
    expect(timeAgoDate).toBe(expected);

  })
})
