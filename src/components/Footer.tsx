import React from "react";

function Footer() {
  return (
    <footer className="border-t border-[#ffffff22] bg-transparent py-6 flex flex-col items-center text-sm text-muted-foreground">
      <div className="mb-2 flex gap-4">
        <a href="/" className="hover:underline">
          Home
        </a>
        <a href="/blog" className="hover:underline">
          Blog
        </a>
      </div>
      <div>
        &copy; {new Date().getFullYear()} A.J. Sallh. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
