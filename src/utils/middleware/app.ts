import { NextRequest, NextResponse } from "next/server";
import { parse } from "@/utils/parse";

export default async function AppMiddleware(req: NextRequest) {
  const { path } = parse(req);
  return NextResponse.rewrite(
    new URL(`/app.ahvana.in${path === "/" ? "" : path}`, req.url)
  );
}
