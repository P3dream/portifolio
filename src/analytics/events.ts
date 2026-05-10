import { track } from '@vercel/analytics';

export const analytics = {
  clickGithub: () => track('click_github'),
  clickLinkedin: () => track('click_linkedin'),
  clickYoutube: () => track('click_youtube'),
  clickEmail: () => track('click_email'),

  clickProject: (name: string) =>
    track('click_project', { name }),

  clickResearchArtifact: (name: string) =>
    track('click_research_artifact', { name }),

  clickResearchPageLink: (source: string) =>
    track('click_research_page_link', { source }),
};
