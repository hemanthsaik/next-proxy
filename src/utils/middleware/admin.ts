import { NextRequest, NextResponse } from "next/server";
import { parse } from "@/utils/parse";

export default async function AdminMiddleware(req: NextRequest) {
  const { path } = parse(req);
  return NextResponse.rewrite(
    new URL(`/admin.ahvana.in${path === "/" ? "" : path}`, req.url)
  );
}
