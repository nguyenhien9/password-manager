function path(root: string, subLink: string) {
  return `${root}${subLink}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/";

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
  register: path(ROOTS_AUTH, "/register"),
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
};
