export interface IssuePriority {
  id: PriorityLevel;
  display: string;
}

export enum PriorityLevel {
  High = "High",
  Medium = "Medium",
  Low = "Low"
}

export interface IIssue {
  id: string;
  title: string;
  description: string;
  dateCreated?: number;
  lastEdited?: number;
  priority?: IssuePriority
  author?: string;
  reactions?: number;
}

export class Issue implements IIssue {
  constructor(public id: string, public title: string, public description: string, public dateCreated: number,
    public priority: IssuePriority, public author: string, public lastEdited?: number, public reactions?: number) {
  }
}