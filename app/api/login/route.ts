import {
  accessCookieName,
  accessToken,
  coursePassword,
  safeEqual,
} from "@/lib/course-access";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const password = coursePassword();
  const loginUrl = new URL("/login", request.url);
  if (!password) {
    loginUrl.searchParams.set("error", "unconfigured");
    return NextResponse.redirect(loginUrl, 303);
  }

  const form = await request.formData();
  const given = String(form.get("password") ?? "");
  if (!safeEqual(given, password)) {
    loginUrl.searchParams.set("error", "1");
    return NextResponse.redirect(loginUrl, 303);
  }

  const response = NextResponse.redirect(new URL("/rag", request.url), 303);
  response.cookies.set(accessCookieName(), await accessToken(password), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}
