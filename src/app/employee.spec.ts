import { Employee } from './employee';

describe('Employee', () => {
  it('should create an instance', () => {
    expect(new Employee(1,"",1,1)).toBeTruthy();
  });
});
