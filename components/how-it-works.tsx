import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Sleep",
    description:
      "Place Lobe on your nightstand. It connects to your biometric tracker and begins passively listening when you enter REM sleep. No buttons, no commands.",
    image: "/images/lobe-sleep.jpg",
    imageAlt: "Abstract visualization of REM sleep brainwave patterns",
  },
  {
    number: "02",
    title: "Wake",
    description:
      "When you wake up, speak your dream fragments into Lobe. The scattered memories, the feelings, the images you half-remember. Just talk.",
    image: "/images/lobe-hero.jpg",
    imageAlt: "Lobe device on a nightstand ready to capture dream fragments",
  },
  {
    number: "03",
    title: "Discover",
    description:
      "Lobe combines your voice, the passive audio recording, and your biometric data to reconstruct your dream into a complete, coherent narrative.",
    image: "/images/lobe-dream.jpg",
    imageAlt: "Surreal dreamscape representing a completed dream narrative",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 max-w-2xl md:mb-24">
          <span className="mb-4 inline-block text-xs tracking-widest text-accent uppercase">
            How It Works
          </span>
          <h2 className="font-serif text-3xl leading-tight text-foreground text-balance md:text-5xl">
            Three steps from sleep to self-discovery
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-20 md:gap-32">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col items-center gap-10 md:gap-16 ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-border md:w-1/2">
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex w-full flex-col md:w-1/2">
                <span className="font-serif text-6xl text-accent/30 md:text-8xl">
                  {step.number}
                </span>
                <h3 className="mt-2 font-serif text-2xl text-foreground md:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
