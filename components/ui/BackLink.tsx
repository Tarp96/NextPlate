import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type BackLinkProps = {
  href: string;
  label: string;
};

export default function BackLink({ href, label }: BackLinkProps) {
  return (
    <Link href={href} aria-label={label} className="...">
      <ArrowLeft aria-hidden="true" className="h-6 w-6 sm:h-7 sm:w-7" />
    </Link>
  );
}
