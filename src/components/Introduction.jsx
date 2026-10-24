import { ChevronRightIcon } from "./Icons";

const Introduction = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center py-10">
      <p className="text-base md:text-lg font-medium text-ink-soft dark:text-night-soft">
        Hi, I’m Atiq.
      </p>

      <h1 className="mt-2 whitespace-nowrap text-lg md:text-xl font-semibold tracking-tight text-note-ink/40 dark:text-night-note/30">
        conjuring code magic.
      </h1>

      <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft dark:text-night-soft">
        Software engineer from Nigeria, fascinated by large-scale, high-impact products.
        I craft seamless experiences on web and mobile.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        <a
          href="mailto:hello@maybeatiq.dev"
          className="rounded-full bg-night-note hover:brightness-95 text-ink px-6 py-3 text-[15px] font-semibold transition"
        >
          Say hi
        </a>
        <a
          href="#projects"
          className="group inline-flex items-center gap-1 text-[15px] font-medium text-note-ink dark:text-night-note hover:underline underline-offset-4"
        >
          See my work
          <ChevronRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
};

export default Introduction;
