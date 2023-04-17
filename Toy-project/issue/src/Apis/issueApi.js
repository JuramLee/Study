import { Axios } from './@core';

const PATH = `/repos/angular/angular-cli/issues`;

const IssueApi = {
  getIssue(id) {
    return Axios.get(PATH + `/${id}`);
  },

  getIssueList(issue) {
    return Axios.get(PATH, {
      params: {
        per_page: issue.per_page,
        page: issue.page,
        sort: issue.sort,
      },
    });
  },
};

export default IssueApi;
