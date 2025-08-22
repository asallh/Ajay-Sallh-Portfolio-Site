"use client";

import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

interface props {
  returnPage: string;
}

function BlogHeader({ returnPage }: props) {
  const router = useRouter();
  const page = returnPage

  return (
    <div>
      <IoIosArrowBack
        size={32}
        style={{ cursor: "pointer" }}
        onClick={() => router.push(page)}
      />
    </div>
  );
}

export default BlogHeader;
