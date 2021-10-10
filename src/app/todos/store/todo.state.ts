export interface TodoItem {
  id: string;
  title: string;
  dateCreated: number;
  isFinished: boolean;
  content: string;
  selected?: boolean;
}

export enum ToggleStatus {
  ALL = 'ALL',
  NONE = 'NONE'
}

export interface SelectedIds {
  [key: string]: boolean;
}
