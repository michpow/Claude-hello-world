import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-pink-light">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <p className="mb-4 text-lg text-gray">hi, i&apos;m michelle</p>

        <h1 className="mb-4 text-4xl font-bold text-heading md:text-5xl">
          director of product
        </h1>

        <p className="mb-6 max-w-xl text-lg leading-relaxed text-gray">
          I help teams navigate ambiguity and turn messy problem spaces into
          products that scale.
        </p>

        <p className="text-sm font-medium text-heading">
          Currently leading product, design, and support at Transfix.
        </p>
      </div>
    </section>
  );
}
