export const removeFirstMatch = <A>(array: Array<A>, valueToRemove: A) => {
  const index = array.indexOf(valueToRemove);
  const copy = [...array];
  if (index !== -1) {
    copy.splice(index, 1);
  }

  return copy;
};

export const buttonTransition = (
  $btn: Element,
  classFrom: string,
  classTo: string
) => {
  $btn.classList.remove(classFrom);
  $btn.classList.add(classTo);
  setTimeout(() => {
    $btn.classList.remove(classTo);
    $btn.classList.add(classFrom);
  }, 300);
};

export const getRandomElements = <T>(arr: T[], n: number): T[] => {
  if (n > arr.length) {
    throw new Error("n cannot be greater than the length of the array");
  }

  const shuffledArr = Array.from(arr).sort(() => Math.random() - 0.5);
  return shuffledArr.slice(0, n);
};
