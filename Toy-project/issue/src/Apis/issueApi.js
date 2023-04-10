import { Axios } from './@core';

const PATH = `/repos/angular/angular-cli/issues`;

const IssueApi = {
  getIssue(id) {
    return Axios.get(PATH + `/${id}`);
  },

  getIssueList(issue) {
    return Axios.get(PATH, {
      params: {
        per_page: issue.perPage,
        page: issue.offset,
        sort: issue.sortState,
      },
    });
  },
};

export default IssueApi;
