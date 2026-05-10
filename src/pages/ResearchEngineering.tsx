import { ExternalLink, FileText, Github, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import AnimatedContainer from "../components/AnimatedContainer";
import { analytics } from "../analytics/events";
import { useTranslatedArray } from "../lib/useTranslatedArray";

type Metric = {
  label: string;
  value: string;
  detail: string;
};

type Artifact = {
  title: string;
  description: string;
  href: string;
  kind: "paper" | "code";
};

const ResearchEngineering = () => {
  const { t } = useTranslation();
  const highlights = useTranslatedArray<string>("research.highlights");
  const metrics = useTranslatedArray<Metric>("research.metrics");
  const artifacts = useTranslatedArray<Artifact>("research.artifacts");

  const handleArtifactClick = (title: string) => {
    analytics.clickResearchArtifact(title);
  };

  return (
    <AnimatedContainer className="mx-auto max-w-screen-2xl overflow-hidden rounded-xl border border-slate-600/80 bg-slate-900/75 px-4 py-5 text-gray-100 shadow-lg backdrop-blur sm:px-6 sm:py-6">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <section>
          <div className="mb-3 flex items-center gap-3 text-gray-200">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-500/80 bg-slate-800/80">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold uppercase tracking-wide">
              {t("research.eyebrow")}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4">
            {t("research.title")}
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
            {t("research.description")}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/TCC_Pedro_Pizzi_final.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleArtifactClick("GenGuardian thesis")}
              className="inline-flex min-h-10 items-center gap-2 rounded-md border border-slate-300 bg-gray-100 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-white"
            >
              <FileText className="w-4 h-4" aria-hidden="true" />
              {t("research.full_paper_button")}
            </a>

            <a
              href="https://github.com/P3dream/detect-dos-attacks-with-llama"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleArtifactClick("GenGuardian repository")}
              className="inline-flex items-center gap-2 rounded-md border border-gray-500 px-4 py-2 text-sm font-semibold text-gray-100 transition hover:border-gray-200 hover:bg-slate-700"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              {t("research.repository_button")}
            </a>
          </div>
        </section>

        <section className="rounded-lg border border-slate-600 bg-slate-800/70 p-5 shadow-md">
          <h3 className="text-lg font-semibold text-gray-100 mb-3">
            {t("research.thesis_title")}
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            {t("research.thesis_summary")}
          </p>
        </section>
      </div>

      <section className="mt-10">
        <h3 className="text-xl font-semibold text-gray-100 mb-4">
          {t("research.highlights_title")}
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {highlights.map((highlight) => (
            <div
              key={highlight}
              className="rounded-lg border border-slate-600/80 bg-slate-700/70 p-4 text-sm leading-relaxed text-gray-200 shadow-md"
            >
              {highlight}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h3 className="text-xl font-semibold text-gray-100 mb-4">
          {t("research.metrics_title")}
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-lg border border-slate-600/80 bg-slate-800/70 p-4 shadow-md"
            >
              <p className="text-sm text-gray-400">{metric.label}</p>
              <p className="mt-2 text-2xl font-bold text-gray-100">{metric.value}</p>
              <p className="mt-2 text-sm text-gray-300">{metric.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h3 className="text-xl font-semibold text-gray-100 mb-4">
          {t("research.artifacts_title")}
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {artifacts.map((artifact) => (
            <a
              key={artifact.title}
              href={artifact.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleArtifactClick(artifact.title)}
              className="group rounded-lg border border-slate-600/80 bg-slate-700/70 p-5 shadow-md transition hover:-translate-y-0.5 hover:border-sky-300/55 hover:bg-slate-700/90 hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3 text-sky-100">
                  {artifact.kind === "paper" ? (
                    <FileText className="w-5 h-5" aria-hidden="true" />
                  ) : (
                    <Github className="w-5 h-5" aria-hidden="true" />
                  )}
                  <h4 className="font-semibold text-gray-100">{artifact.title}</h4>
                </div>
                <ExternalLink
                  className="w-4 h-4 shrink-0 text-gray-400 transition group-hover:text-sky-100"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">
                {artifact.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    </AnimatedContainer>
  );
};

export default ResearchEngineering;
