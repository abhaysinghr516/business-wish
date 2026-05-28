import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title") || "Business Wish";
    const description = searchParams.get("description") || "Free Tailwind CSS UI Components & Motion";
    const section = searchParams.get("section") || "UI Components";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            backgroundColor: "#09090b",
            backgroundImage: "radial-gradient(circle at 85% 15%, rgba(99, 102, 241, 0.15) 0%, transparent 60%), radial-gradient(circle at 15% 85%, rgba(217, 70, 239, 0.15) 0%, transparent 60%)",
            padding: "60px 80px",
            fontFamily: "sans-serif",
            color: "#fff",
            boxSizing: "border-box",
          }}
        >
          {/* Top row */}
          <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #6366f1, #d946ef)",
                  marginRight: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: "#fff",
                }}
              >
                B
              </div>
              <span style={{ fontSize: "26px", fontWeight: 700, letterSpacing: "-0.03em" }}>
                Business Wish
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                padding: "8px 16px",
                borderRadius: "99px",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                  marginRight: "10px",
                }}
              />
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {section}
              </span>
            </div>
          </div>

          {/* Main content block */}
          <div style={{ display: "flex", flexDirection: "column", width: "100%", marginTop: "30px", flexGrow: 1, justifyContent: "center" }}>
            <h1
              style={{
                fontSize: "72px",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                margin: "0 0 16px 0",
                background: "linear-gradient(to right, #ffffff, #e4e4e7)",
                backgroundClip: "text",
                color: "transparent",
                lineHeight: 1.1,
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: "26px",
                color: "#a1a1aa",
                lineHeight: 1.5,
                margin: "0",
                maxWidth: "920px",
              }}
            >
              {description}
            </p>
          </div>

          {/* Footer row */}
          <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255, 255, 255, 0.05)", paddingTop: "30px" }}>
            <div style={{ display: "flex", gap: "12px" }}>
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  padding: "6px 16px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  color: "#d4d4d8",
                  fontWeight: 500,
                }}
              >
                Tailwind CSS
              </div>
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  padding: "6px 16px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  color: "#d4d4d8",
                  fontWeight: 500,
                }}
              >
                React & Next.js
              </div>
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  padding: "6px 16px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  color: "#d4d4d8",
                  fontWeight: 500,
                }}
              >
                100% Free
              </div>
            </div>

            <span
              style={{
                fontSize: "18px",
                fontWeight: 600,
                background: "linear-gradient(to right, #6366f1, #d946ef)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              businesswish.tech
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.error(e);
    return new Response(`Failed to generate the OG image`, {
      status: 500,
    });
  }
}
