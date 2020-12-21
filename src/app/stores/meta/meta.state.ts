export interface MetaState {
  showMetaBox: boolean;
  allActions: UserAction[];
  actionCount: number;
}

export interface UserAction {
  component: string | undefined;
  action: string;
  time: number;
}
