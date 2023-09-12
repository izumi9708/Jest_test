export function filterEvens(numbers: number[]): number[] {
  return numbers.filter(num => num % 2 === 0);
}

export function reverseString(input: string): string {
  return input.split('').reverse().join('');
}

