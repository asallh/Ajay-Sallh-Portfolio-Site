import Footer from "@/components/Footer";
import React from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <Footer />
    </div>
  );
}
