"use client";

const testimonials = [
  {
    id: "testimonial-ravi",
    quote:
      "ACE Finance helped us expand our manufacturing unit with a quick business loan. The process was smooth and completely transparent.",
    name: "Ravi B.",
    role: "Manufacturing Owner",
    avatar: "R",
    stars: 5,
  },
  {
    id: "testimonial-ajit",
    quote:
      "As a startup, getting funding was challenging. The ACE Finance team truly understood our needs and matched us with the right bank.",
    name: "Ajit Patil",
    role: "Retail Trader",
    avatar: "A",
    stars: 5,
  },
  {
    id: "testimonial-suraj",
    quote:
      "Excellent service and competitive rates. They helped us open three new stores with their working capital loan solutions.",
    name: "Suraj K.",
    role: "Franchise Owner",
    avatar: "S",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ fontSize: "16px", color: "#BFDDF0" }}>
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
        background: "#000000",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(191, 221, 240, 0.08)",
      }}
    >
      {/* Decorative BG Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(191, 221, 240, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
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
              background: "rgba(191, 221, 240, 0.12)",
              color: "#BFDDF0",
              border: "1px solid rgba(191, 221, 240, 0.2)",
            }}
          >
            ⭐ Client Stories
          </div>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 46px)",
              fontWeight: "900",
              color: "#ffffff",
              letterSpacing: "-1.5px",
              lineHeight: "1.15",
              marginBottom: "16px",
            }}
          >
            What Our Clients Say
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255, 255, 255, 0.82)",
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Real stories from business owners and individuals who achieved success.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "28px",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              id={t.id}
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                borderRadius: "24px",
                padding: "36px 32px",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-6px)";
                el.style.background = "rgba(255, 255, 255, 0.06)";
                el.style.borderColor = "rgba(191, 221, 240, 0.3)";
                el.style.boxShadow = "0 20px 40px rgba(191, 221, 240, 0.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.background = "rgba(255, 255, 255, 0.03)";
                el.style.borderColor = "rgba(255, 255, 255, 0.06)";
                el.style.boxShadow = "none";
              }}
            >
              <StarRating count={t.stars} />

              {/* Quote */}
              <p
                style={{
                  fontSize: "15px",
                  color: "rgba(255, 255, 255, 0.8)",
                  lineHeight: "1.8",
                  marginBottom: "28px",
                  fontStyle: "italic",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    fontSize: "48px",
                    color: "#BFDDF0",
                    opacity: 0.3,
                    position: "absolute",
                    top: "-20px",
                    left: "-8px",
                    lineHeight: 1,
                    fontFamily: "Georgia, serif",
                  }}
                >
                  “
                </span>
                <span style={{ paddingLeft: "24px", display: "block" }}>
                  {t.quote}
                </span>
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    background: "#BFDDF0",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    fontWeight: "800",
                    color: "#000000",
                    flexShrink: 0,
                    boxShadow: "0 4px 10px rgba(191, 221, 240, 0.2)",
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: "800",
                      color: "#ffffff",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "rgba(255, 255, 255, 0.72)",
                      marginTop: "2px",
                      fontWeight: "500",
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
