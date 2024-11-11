function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

// AUTH_PATH

const ROOTS_AUTH = "/auth";
const ROOTS_PAGE = "/";

export const AUTH_PATH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
  register: path(ROOTS_AUTH, "/register"),
};
export const PAGE_PATH = {
  root: ROOTS_PAGE,
};
