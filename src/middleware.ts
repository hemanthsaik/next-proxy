import { NextRequest } from "next/server";
import { parse } from "@/utils/parse";
import { ADMIN_HOSTNAMES, APP_HOSTNAMES } from "@/utils";
import AdminMiddleware from "@/utils/middleware/admin";
import AppMiddleware from "./utils/middleware/app";

export async function middleware(req: NextRequest) {
  const { domain } = parse(req);

  if (ADMIN_HOSTNAMES.has(domain)) {
    return AdminMiddleware(req);
  }

  if (APP_HOSTNAMES.has(domain)) {
    return AppMiddleware(req);
  }
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
