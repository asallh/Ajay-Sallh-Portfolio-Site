import { ReactNode } from "react";
import { Vortex } from "./ui/vortex";

interface BackgroundProps {
  children: ReactNode; // Type for children
}

export default function Background({ children }: BackgroundProps) {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={400}
        baseHue={1200}
        className="absolute top-0 left-0 w-full h-full"
      >
        {children}
      </Vortex>
    </div>
  );
}
