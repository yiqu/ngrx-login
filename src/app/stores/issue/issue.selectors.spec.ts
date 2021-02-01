
import { VerifiedUser } from "src/app/shared/models/user.model";
import { AppState } from "../global/app.reducer";
import { IssueEntityState } from "./issue.reducer";
import { getIssuesOverallLoading, selectIssueIds, selectIssueEntities,
  getIssueBySelectedId,
  getSelectedIssueId,
  selectIssueById} from "./issue.selectors";

describe("Issue Selectors test", () => {

  const initialState: AppState | any = {
    issues: {
      ids: ['123', '456'],
      entities: {
        '123' : {
          id: '123',
          title: 'Title',
          description: 'Issue Desc',
          dateCreated: 9999,
          lastEdited: 8888,
          open: true,
          created: true,
          loading: false,
          issueNumber: 42
        },
        '456' : {
          id: '456',
          title: 'Title 456',
          description: 'Issue Desc for 456',
          dateCreated: 2222,
          lastEdited: 3333,
          open: true,
          created: true,
          loading: false,
          issueNumber: 24
        }
      },
      fbError: false,
      loading: true,
      issuesRefreshingLoading: true,
      allIssuesLastFetched: 5555,
      selectedIssueId: '456'
    },
  };

  it("should select loading state", () => {
    const result = getIssuesOverallLoading.projector(initialState.issues);

    expect(result).toBe(true);
  });

  it("should select all ids state", () => {
    const result = selectIssueIds.projector(initialState.issues);
    const expected = ['123', '456'];

    expect(result).toEqual(expected);
    expect(result.length).toEqual(2);
  });

  it("should select all entities state", () => {
    const result = selectIssueEntities.projector(initialState.issues);

    const expected = {
      '123' : {
        id: '123',
        title: 'Title',
        description: 'Issue Desc',
        dateCreated: 9999,
        lastEdited: 8888,
        open: true,
        created: true,
        loading: false,
        issueNumber: 42
      },
      '456' : {
        id: '456',
        title: 'Title 456',
        description: 'Issue Desc for 456',
        dateCreated: 2222,
        lastEdited: 3333,
        open: true,
        created: true,
        loading: false,
        issueNumber: 24
      }
    };
    expect(result).toEqual(expected);
  });


  it("should select the issue by selectedId", () => {
    const result = getIssueBySelectedId.projector(
      getSelectedIssueId.projector(initialState.issues),
      selectIssueEntities.projector(initialState.issues)
    );

    expect(getSelectedIssueId(initialState)).toBe('456');

    expect(result).toBeTruthy();
    expect(result?.title).toEqual('Title 456');
  });

  it("should select the issue by id input", () => {
    const result = selectIssueById('456').projector(
      selectIssueEntities.projector(initialState.issues)
    )

    expect(result).toBeTruthy();
    expect(result?.title).toEqual('Title 456');
  });



});
