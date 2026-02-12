// This component shows your headshot photo in a circle with a nice border.
// Your photo lives at public/images/headshot.png — Next.js serves anything
// in the "public" folder at the root URL (so /images/headshot.png).

import Image from "next/image";

interface HeadshotImageProps {
  size?: "sm" | "lg"; // "sm" = small (about page), "lg" = large (hero)
}

export default function HeadshotImage({ size = "lg" }: HeadshotImageProps) {
  // "lg" is used in the hero section, "sm" on the about page
  const dimensions = size === "lg" ? "h-32 w-32" : "h-48 w-48";
  const pixels = size === "lg" ? 128 : 192;

  return (
    <Image
      src="/images/headshot.png"
      alt="Michelle Powell"
      width={pixels}
      height={pixels}
      className={`${dimensions} rounded-full object-cover ring-4 ring-pink-primary/20`}
      priority
    />
  );
}
