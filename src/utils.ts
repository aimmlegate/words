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
