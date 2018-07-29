export default function (count: number, word: string) {
  return count === 1 ? word : `${word}s`;
}
