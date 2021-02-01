import * as fromIssueReducer from './issue.reducer';
import * as fromIssueActions from './issue.actions';
import { IIssue } from 'src/app/shared/models/general.model';
import { IssuePriority, PriorityLevel } from '../../shared/models/general.model';
import { IssueEntityState } from './issue.reducer';
import { Update } from '@ngrx/entity';

describe('Issue Reducer test', () => {

  describe('unknown action will not cause state change', () => {

    it('should return the default state', () => {
      const { inititalState } = fromIssueReducer;
      const action = {
        type: 'Unknown action',
      };
      const state = fromIssueReducer.issueEntityReducer(inititalState, action);

      expect(state).toBe(inititalState);
      expect(state.ids.length).toEqual(0);
      expect(Object.keys(state.entities).length).toEqual(0);
    });
  });

  describe('testing issue related actions', () => {

    it('state change for issue add start', () => {
      const { inititalState } = fromIssueReducer;

      const prio: IssuePriority = {
        id: PriorityLevel.Low,
        display: 'Low'
      }
      const exampleIssue: IIssue = {
        id: "123456",
        title: "Cool title",
        description: "My desc",
        dateCreated: 123456,
        lastEdited: 123,
        priority: prio,
        author: "Kevin",
        reactions: 123,
        open: true,

        created: true,
        loading: false,
        issueNumber: 4
      }

      const newState: IssueEntityState = {
        ...inititalState,
        loading: true,
        entities: {
          '123456': exampleIssue
        },
        ids: ['123456']
      }

      const action = fromIssueActions.createIssueStart({ data: exampleIssue, url: '' });

      const state = fromIssueReducer.issueEntityReducer(inititalState, action);

      expect(state.ids.length).toEqual(1);
      expect(state.ids[0]).toEqual(newState.ids[0]);
      expect(state.entities['123456']).toEqual(newState.entities['123456']);
      expect(state.loading).toBeTrue();

    });

    it('state change for issue add success', () => {
      const { inititalState } = fromIssueReducer;

      const prio: IssuePriority = {
        id: PriorityLevel.Low,
        display: 'Low'
      }
      const exampleIssue: IIssue = {
        id: "123456",
        title: "Cool title",
        description: "My desc",
        dateCreated: 123456,
        lastEdited: 123,
        priority: prio,
        author: "Kevin",
        reactions: 123,
        open: true,

        created: true,
        loading: false,
        issueNumber: 4
      }

      const updatedIssue: Update<IIssue> = {
        id: '123456',
        changes: {
          created: true,
          loading: false,
          issueNumber: 5,
          dateCreated: 9876
        }
      }

      const newState: IssueEntityState = {
        ...inititalState,
        loading: true,
        entities: {
          '123456': {
            id: "123456",
            title: "Cool title",
            description: "My desc",
            dateCreated: 9876,
            lastEdited: 123,
            priority: prio,
            author: "Kevin",
            reactions: 123,
            open: true,

            created: true,
            loading: false,
            issueNumber: 5
          }
        },
        ids: ['123456']
      }

      const addIssueStartAction = fromIssueActions.createIssueStart({ data: exampleIssue, url: '' });
      const stateAfterAddStart = fromIssueReducer.issueEntityReducer(inititalState, addIssueStartAction);
      const addIssueSuccessAction = fromIssueActions.createIssueSuccess({ data: updatedIssue, dateFinished: 123, url: '' });
      const stateAfterAddSuccess: any = fromIssueReducer.issueEntityReducer(stateAfterAddStart, addIssueSuccessAction);

      expect(stateAfterAddSuccess.ids.length).toEqual(1);
      expect(stateAfterAddSuccess.ids[0]).toEqual(newState.ids[0]);
      expect(stateAfterAddSuccess.entities['123456']).toEqual(newState.entities['123456']);
      expect(stateAfterAddSuccess.loading).toBeTrue();
      expect(stateAfterAddSuccess.fbError).toBeFalse();
      expect(stateAfterAddSuccess['fbErrorMsg']).toBeNull();

    });


  });

});
