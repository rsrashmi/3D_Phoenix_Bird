"use client";
import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { active, progress } = useProgress();
  return active ? (
    <Html
      center
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: "20px",
        color: "white",
        background: "linear-gradient(to top, #ff512f, #2476dd)",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 10,
      }}
    >
      Loading {progress.toFixed(0)}%
    </Html>
  ) : null;
}
