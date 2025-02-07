import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/referanslarimiz") {
    return NextResponse.redirect(
      new URL("/referanslarimiz/savunma-sanayi", req.url),
      307
    );
  }
  if (req.nextUrl.pathname === "/hizmetlerimiz") {
    return NextResponse.redirect(
      new URL("/hizmetlerimiz/transfer-tasimaciligi", req.url),
      307
    );
  }
}
