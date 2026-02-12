// This component shows your headshot photo in a circle with a nice border.
// Right now it shows a placeholder — once you add your photo to
// public/images/headshot.jpg, swap out the placeholder div for the
// Next.js <Image> component (commented out below).

// import Image from "next/image";

interface HeadshotImageProps {
  size?: "sm" | "lg"; // "sm" = small (about page), "lg" = large (hero)
}

export default function HeadshotImage({ size = "lg" }: HeadshotImageProps) {
  const dimensions = size === "lg" ? "h-32 w-32" : "h-48 w-48";

  return (
    // Placeholder circle — replace with your real photo!
    <div
      className={`${dimensions} rounded-full bg-pink-primary/30 ring-4 ring-pink-primary/20 flex items-center justify-center`}
    >
      <span className="text-pink-dark/50 text-xs">Your photo</span>
    </div>

    // When you have your headshot ready, uncomment this and delete the div above:
    // <Image
    //   src="/images/headshot.jpg"
    //   alt="Michelle Powell"
    //   width={size === "lg" ? 128 : 192}
    //   height={size === "lg" ? 128 : 192}
    //   className={`${dimensions} rounded-full object-cover ring-4 ring-pink-primary/20`}
    //   priority
    // />
  );
}
