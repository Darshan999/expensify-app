const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}`;

test('should add two numbers', () => {
    const result = add(5, 6);
    expect(result).toBe(11);
});

test('should generate greeting from name', () => {
    const result = generateGreeting('Darshan');
    expect(result).toBe(`Hello Darshan`);
});

test('should generate greeting for no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous');
});