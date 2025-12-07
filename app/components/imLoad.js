"use client";
import { useState } from "react";
import Image from "next/image";

export default function ImLoad({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Placeholder innan bilden laddas */}
      {!loaded && (
        <div
          style={{
            width: "100%",
            height: "10rem",
            backgroundColor: "var(--background-third)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "gray",
            fontStyle: "italic",
          }}
        >
          Loading...
        </div>
      )}

      {/* Bilden */}
      <Image
        src={src || "/default-image.jpg"}
        alt={alt || "Project image"}
        width={800}
        height={600}
        sizes="100vw"
        onLoad={() => setLoaded(true)}
        style={{
          width: "48rem",
          height: "auto",
          maxHeight: "30rem",
          objectFit: "contain",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
        }}
      />

      {/* Bildtext (om finns) */}
      {alt && (
        <p
          style={{
            marginTop: "1rem",
            fontStyle: "italic",
            maxWidth: "34rem",
            textAlign: "center",
          }}
        >
          {alt}
        </p>
      )}
    </div>
  );
}
