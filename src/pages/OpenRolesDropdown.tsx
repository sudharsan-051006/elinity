import { useState, useEffect, useRef } from "react";

function OpenRolesDropdown() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const dropdownRef = useRef(null);

  const roles = [
    { name: "Founding Growth and Content Lead ", link: "/foundgrowth" },
    { name: "Software Engineer", link: "/software" },
    { name: "Head of Design & Experiences", link: "/designhead" },
    { name: "Head of AI Research", link: "/headai" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      style={{
        marginTop: "25px",
        position: "relative",
        display: "inline-block",
        width: isMobile ? "100%" : "auto"
      }}
    >
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          padding: "14px 26px",
          borderRadius: "12px",
          border: "none",
          background: "linear-gradient(90deg,#b066fe,#7c3aed)",
          color: "#fff",
          fontWeight: 600,
          fontSize: "15px",
          cursor: "pointer",
          width: isMobile ? "100%" : "auto",
          boxShadow: "0 6px 20px rgba(176,102,254,0.4)",
          transition: "all 0.25s ease"
        }}
      >
        Open Roles ▾
      </button>

      {/* Dropdown */}
      <div
        style={{
          position: "absolute",
          top: "52px",
          left: 0,
          right: isMobile ? 0 : "auto",
          minWidth: isMobile ? "100%" : "260px",
          background: "rgba(20,20,25,0.95)",
          backdropFilter: "blur(16px)",
          borderRadius: "14px",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
          overflow: "hidden",
          zIndex: 20,

          /* Animation */
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0px)" : "translateY(-10px)",
          pointerEvents: open ? "auto" : "none",
          transition: "all 0.3s ease"
        }}
      >
        {roles.map((role, index) => (
          <a
            key={index}
            href={role.link}
            style={{
              display: "block",
              padding: "16px 18px",
              textDecoration: "none",
              color: "#e5e5e5",
              fontSize: "15px",
              transition: "all 0.25s ease",
              borderBottom:
                index !== roles.length - 1
                  ? "1px solid rgba(255,255,255,0.06)"
                  : "none"
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(176,102,254,0.15)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
            }}
            onClick={() => setOpen(false)}
          >
            {role.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default OpenRolesDropdown;