export interface SortStep {
  array: number[];
  highlight: [number, number] | null;
}

export function generateBubbleSortSteps(input: number[]): SortStep[] {
  const arr = [...input];
  const steps: SortStep[] = [{ array: [...arr], highlight: null }];

  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      steps.push({ array: [...arr], highlight: [j, j + 1] });

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        steps.push({ array: [...arr], highlight: [j, j + 1] });
      }
    }
  }

  steps.push({ array: [...arr], highlight: null });
  return steps;
}
