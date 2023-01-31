import { serialize, parse } from "cookie";

export const MAX_AGE = 60 * 60 * 8;
const TOKEN_NAME = "token";

export function setTokenCookie(res, token) {
  const cookie = serialize(TOKEN_NAME, token, {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    httpOnly: true,
    path: "/",
    sameSite: "lax",
  });

  res.setHeader("Set-Cookie", cookie);
}

export function removeTokenCookie(res) {
  const cookie = serialize(TOKEN_NAME, "", {
    maxAge: -1,
    path: "/",
  });

  res.setHeader("Set-Cookie", cookie);
}

export function parseCookie(req) {
  if (req.cookies) return req.cookies;

  const cookie = req.headers?.cookie;
  return parse(cookie || "");
}

export function getTokenCookie(req) {
  const cookies = parseCookie(req);
  return cookies[TOKEN_NAME];
}
