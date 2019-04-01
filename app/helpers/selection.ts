export interface ISelection {
  ids: number[]; // DO NOT ACCESS DIRECTLY!
}

export function create(): ISelection {
  return {
    ids: [],
  }
}

export function getIds(selection: ISelection): number[] {
  return selection.ids;
}

export function isSelected(selection: ISelection, id: number) {
  return selection.ids.find((x) => x === id) != null;
}

export function add(selection: ISelection, id: number): ISelection {
  return {
    ...selection,
    ids: [...selection.ids.filter((x) => x !== id), id]
  }
}

export function remove(selection: ISelection, id: number): ISelection {
  return {
    ...selection,
    ids: selection.ids.filter((x) => x !== id),
  }
}
