import { NextRequest, NextResponse } from "next/server";

export const revalidate = 3600;

const repoPattern = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/;

export async function GET(request: NextRequest) {
  const repo = request.nextUrl.searchParams.get("repo") || "";

  if (!repoPattern.test(repo)) {
    return NextResponse.json({ error: "Invalid repository" }, { status: 400 });
  }

  try {
    const response = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: { revalidate },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch repository" },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json(
      { stargazers_count: data.stargazers_count ?? 0 },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch repository" },
      { status: 502 }
    );
  }
}
