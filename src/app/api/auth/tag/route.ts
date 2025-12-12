import { NextResponse } from "next/server";
import type { ApiResponse } from "../shared/types";
import { getTagCategories } from "../shared/tagCatalog";

// Types and data are provided by shared tag catalog.

const tagCategories = getTagCategories();

export async function GET() {
  try {
    const response: ApiResponse = {
      data: {
        content: tagCategories,
      },
      error: null,
      success: true,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(response, { status: 200 });
  } catch {
    const response: ApiResponse = {
      data: null,
      error: {
        code: "AUTH_001",
        message: "서버 오류가 발생했습니다.",
      },
      success: false,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(response, { status: 500 });
  }
}
