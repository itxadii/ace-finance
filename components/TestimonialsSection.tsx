"use client";

const testimonials = [
  {
    id: "testimonial-ravi",
    quote:
      "Acefinance helped us expand our manufacturing unit with a quick business loan. The process was smooth and completely transparent.",
    name: "Ravi B.",
    role: "Manufacturing Unit",
    avatar: "R",
    color: "#1a56db",
    stars: 5,
  },
  {
    id: "testimonial-ajit",
    quote:
      "As a startup, getting funding was challenging. The acefinance team truly understood our needs and provided the perfect solution.",
    name: "Ajit Patil",
    role: "Traders",
    avatar: "A",
    color: "#f59e0b",
    stars: 5,
  },
  {
    id: "testimonial-suraj",
    quote:
      "Excellent service and competitive rates. They helped us open three new stores with their working capital loan.",
    name: "Suraj",
    role: "Traders",
    avatar: "S",
    color: "#10b981",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ fontSize: "18px", color: "#f59e0b" }}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #1a56db 100%)",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative BG */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(26,86,219,0.2) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      <div className="container-max" style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div
            className="section-label"
            style={{
              background: "rgba(245,158,11,0.15)",
              color: "#fcd34d",
              border: "1px solid rgba(245,158,11,0.3)",
            }}
          >
            ⭐ Client Stories
          </div>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: "800",
              color: "white",
              letterSpacing: "-1.5px",
              lineHeight: "1.15",
              marginBottom: "16px",
              fontFamily: "Lato, sans-serif",
            }}
          >
            What Our Clients Say
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.6)",
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Real stories from people we've helped succeed.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              id={t.id}
              style={{
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "24px",
                padding: "36px 32px",
                transition: "all 0.3s ease",
                animationDelay: `${i * 0.15}s`,
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-6px)";
                el.style.background = "rgba(255,255,255,0.11)";
                el.style.borderColor = "rgba(255,255,255,0.25)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.background = "rgba(255,255,255,0.07)";
                el.style.borderColor = "rgba(255,255,255,0.12)";
              }}
            >
              <StarRating count={t.stars} />

              {/* Quote */}
              <p
                style={{
                  fontSize: "16px",
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: "1.8",
                  marginBottom: "28px",
                  fontStyle: "italic",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    fontSize: "48px",
                    color: t.color,
                    opacity: 0.4,
                    position: "absolute",
                    top: "-16px",
                    left: "-8px",
                    lineHeight: 1,
                    fontFamily: "Georgia, serif",
                  }}
                >
                  "
                </span>
                <span style={{ paddingLeft: "24px", display: "block" }}>
                  {t.quote}
                </span>
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: `linear-gradient(135deg, ${t.color}, ${t.color}aa)`,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    fontWeight: "800",
                    color: "white",
                    flexShrink: 0,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: "700",
                      color: "white",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.5)",
                      marginTop: "2px",
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

