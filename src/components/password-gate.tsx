"use client";

import { useState, useEffect, useCallback } from "react";

const PASSWORD_HASH = process.env.NEXT_PUBLIC_PASSWORD_HASH ?? "";
const SESSION_KEY = process.env.NEXT_PUBLIC_SESSION_KEY ?? "elvo-portfolio-auth";

async function sha256(text: string): Promise<string> {
  const data = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export default function PasswordGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);

  /* check sessionStorage on mount */
  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY) === "1") {
        setAuthed(true);
      }
    } catch {
      /* sessionStorage unavailable — stay gated */
    }
    setChecking(false);
  }, []);

  const handleSubmit = useCallback(
    async (e?: React.FormEvent) => {
      e?.preventDefault();
      const hash = await sha256(value);
      if (hash === PASSWORD_HASH) {
        try {
          sessionStorage.setItem(SESSION_KEY, "1");
        } catch {
          /* proceed anyway */
        }
        setAuthed(true);
      } else {
        setError(true);
        setShaking(true);
        setTimeout(() => setShaking(false), 500);
      }
    },
    [value]
  );

  /* don't flash the gate while checking storage */
  if (checking) return null;
  if (authed) return <>{children}</>;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0a0a",
      }}
    >
      {/* shake animation */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
        }
        .gate-shake { animation: shake 0.4s ease-in-out; }
      `}</style>

      <form
        onSubmit={handleSubmit}
        className={shaking ? "gate-shake" : ""}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          width: "100%",
          maxWidth: "360px",
          padding: "0 24px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "#ededed",
            color: "#0a0a0a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: 20,
            marginBottom: 8,
          }}
        >
          E
        </div>

        <p
          style={{
            color: "#6b7280",
            fontSize: 14,
            textAlign: "center",
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          This portfolio is password-protected.
        </p>

        <input
          type="password"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError(false);
          }}
          placeholder="Enter password"
          autoFocus
          style={{
            width: "100%",
            padding: "14px 16px",
            borderRadius: 12,
            border: error
              ? "1px solid #ef4444"
              : "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.05)",
            color: "#ededed",
            fontSize: 15,
            outline: "none",
            transition: "border-color 0.2s",
          }}
          onFocus={(e) => {
            if (!error)
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
          }}
          onBlur={(e) => {
            if (!error)
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
          }}
        />

        {error && (
          <p
            style={{
              color: "#ef4444",
              fontSize: 13,
              margin: "-12px 0 0",
            }}
          >
            Incorrect password
          </p>
        )}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "14px 0",
            borderRadius: 12,
            border: "none",
            background: "#ededed",
            color: "#0a0a0a",
            fontSize: 15,
            fontWeight: 600,
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#ffffff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#ededed";
          }}
        >
          Enter
        </button>
      </form>
    </div>
  );
}
