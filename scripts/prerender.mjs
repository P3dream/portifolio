import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDirectory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = path.join(rootDirectory, "dist");
const siteUrl = "https://www.pedropizzi.com";

const pages = {
  "/": "about",
  "/about": "about",
  "/projects": "projects",
  "/research-engineering": "research",
  "/resume": "resume",
  "/certificates": "certificates",
};

const escapeHtml = (value) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const replaceTagContent = (html, pattern, content) => html.replace(pattern, content);

const template = await readFile(path.join(outputDirectory, "index.html"), "utf8");
const englishTranslations = JSON.parse(
  await readFile(path.join(rootDirectory, "src", "locale", "en.json"), "utf8"),
).translation;

await Promise.all(
  Object.entries(pages).map(async ([route, pageKey]) => {
    const metadata = englishTranslations.seo[pageKey];
    const url = `${siteUrl}${route === "/" ? "/about" : route}`;
    const title = escapeHtml(metadata.title);
    const description = escapeHtml(metadata.description);

    let html = template;
    html = replaceTagContent(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
    html = replaceTagContent(
      html,
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
      `<meta name="description" content="${description}" />`,
    );
    html = replaceTagContent(
      html,
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
      `<link rel="canonical" href="${url}" />`,
    );
    html = replaceTagContent(
      html,
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:title" content="${title}" />`,
    );
    html = replaceTagContent(
      html,
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${description}" />`,
    );
    html = replaceTagContent(
      html,
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:url" content="${url}" />`,
    );

    const filePath =
      route === "/"
        ? path.join(outputDirectory, "index.html")
        : path.join(outputDirectory, route.slice(1), "index.html");

    await mkdir(path.dirname(filePath), { recursive: true });
    await writeFile(filePath, html);
  }),
);

console.log(`Generated static metadata for ${Object.keys(pages).length} routes.`);
