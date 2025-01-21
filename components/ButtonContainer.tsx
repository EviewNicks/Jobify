"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type ButtonContainerProps = {
  currentPage: number;
  totalPages: number;
};
import { Button } from "./ui/button";
function ButtonContainer({ currentPage, totalPages }: ButtonContainerProps) {
  return <h2 className="text-4xl">button container</h2>;
}
export default ButtonContainer;
