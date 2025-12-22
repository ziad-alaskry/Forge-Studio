import { cn } from "@/lib/utils";

interface ProcessStep {
  title: string;
  description: string;
  span?: string;
}

const processSteps: ProcessStep[] = [
  {
    title: "Understand",
    description:
      "We start by deeply understanding your business goals, constraints, and technical requirements.",
    span: "lg:col-span-3",
  },
  {
    title: "Design",
    description:
      "We design system architecture and user experience before writing a single line of code.",
    span: "lg:col-span-3",
  },
  {
    title: "Build",
    description:
      "We implement the system using clean, scalable code and proven engineering practices.",
    span: "lg:col-span-4",
  },
  {
    title: "Ship",
    description:
      "We test, deploy, and hand over a production-ready system with full clarity.",
    span: "lg:col-span-2",
  },
];

const ForgeProcessBento = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 ">
      {processSteps.map((step, index) => (
        <div
          key={step.title}
          className={cn(
            "relative hover:-translate-y-1 hover:scale-[1.05] rounded-2xl border border-white/10 bg-white/5 p-8",
            "backdrop-blur-sm",
            step.span
          )}
        >
          {/* Step number */}
          <div className="absolute top-6 right-6 text-forgeBlue text-sm font-semibold">
            0{index + 1}
          </div>

          {/* Content */}
          <h3 className="text-xl font-semibold text-white mb-3">
            {step.title}
          </h3>
          <p className="text-white/70 leading-relaxed">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ForgeProcessBento;
