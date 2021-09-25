export interface TodoItem {
  id: string;
  title: string;
  dateCreated: number;
  isFinished: boolean;
  content: string;
  selected?: boolean;
}
