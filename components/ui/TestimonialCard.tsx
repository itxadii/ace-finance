import React from 'react';

interface TestimonialCardProps {
    label?: string;
    quote?: string;
    authorName?: string;
    authorRole?: string;
}

const TestimonialCard = ({
    label = "Quote of the month",
    quote = "Fortune favors the bold.",
    authorName = "Virgil",
    authorRole = "Latin poet"
}: TestimonialCardProps) => {
    return (
        <div style={{
            width: "340px",
            height: "380px",
            background: "#ffffff",
            position: "relative",
            borderRadius: "20px",
            fontFamily: "sans-serif",
            overflow: "hidden",
            border: "1px solid #e2e8f0",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            transition: "box-shadow 0.3s ease",
            cursor: "pointer",
        }}
            className="group hover:shadow-xl"
        >
            {/* Top Label */}
            <div style={{
                textTransform: "uppercase",
                fontWeight: 800,
                color: "#059669",
                padding: "36px 36px 0 36px",   /* ← bigger top + side padding */
                fontSize: "11px",
                letterSpacing: "0.1em",
                position: "relative",
                zIndex: 10,
            }}>
                {label}
            </div>

            {/* Background SVG Quote Mark */}
            <div style={{
                color: "rgba(167,243,208,0.6)",
                paddingLeft: "32px",
                position: "absolute",
                top: "72px",
                left: 0,
                pointerEvents: "none",
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 330 307" height={90} width={90}>
                    <path fill="currentColor" d="M302.258 176.221C320.678 176.221 329.889 185.432 329.889 203.853V278.764C329.889 297.185 320.678 306.395 302.258 306.395H231.031C212.61 306.395 203.399 297.185 203.399 278.764V203.853C203.399 160.871 207.902 123.415 216.908 91.4858C226.323 59.1472 244.539 30.902 271.556 6.75027C280.562 -1.02739 288.135 -2.05076 294.275 3.68014L321.906 29.4692C328.047 35.2001 326.614 42.1591 317.608 50.3461C303.69 62.6266 292.228 80.4334 283.223 103.766C274.626 126.69 270.328 150.842 270.328 176.221H302.258ZM99.629 176.221C118.05 176.221 127.26 185.432 127.26 203.853V278.764C127.26 297.185 118.05 306.395 99.629 306.395H28.402C9.98126 306.395 0.770874 297.185 0.770874 278.764V203.853C0.770874 160.871 5.27373 123.415 14.2794 91.4858C23.6945 59.1472 41.9106 30.902 68.9277 6.75027C77.9335 -1.02739 85.5064 -2.05076 91.6467 3.68014L119.278 29.4692C125.418 35.2001 123.985 42.1591 114.98 50.3461C101.062 62.6266 89.6 80.4334 80.5942 103.766C71.9979 126.69 67.6997 150.842 67.6997 176.221H99.629Z" />
                </svg>
            </div>

            {/* Main Quote Text */}
            <div style={{
                fontSize: "22px",
                fontWeight: 900,
                padding: "0 36px",             /* ← matches side padding */
                color: "#1e293b",
                position: "absolute",
                top: "130px",                  /* ← pushed down to clear bigger quote mark */
                left: 0,
                right: 0,
                lineHeight: "30px",
                zIndex: 10,
            }}>
                {quote}
            </div>

            {/* Author — fades in on hover */}
            <div style={{
                position: "absolute",
                bottom: "36px",                /* ← more breathing room from bottom */
                left: "36px",                  /* ← matches side padding */
                display: "flex",
                flexDirection: "column",
                transition: "opacity 0.5s ease",
            }}
                className="opacity-0 group-hover:opacity-100"
            >
                <div style={{ fontWeight: 700, color: "#065f46", display: "flex", alignItems: "center", gap: "4px" }}>
                    - by {authorName}
                    <svg style={{ fill: "rgba(16,185,129,0.5)" }} height="14" width="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H24V24H0z" fill="none" />
                        <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z" />
                    </svg>
                </div>
                <span style={{ fontSize: "12px", color: "rgba(5,150,105,0.7)", fontWeight: 500, fontStyle: "italic" }}>
                    ({authorRole})
                </span>
            </div>
        </div>
    );
}

export default TestimonialCard;