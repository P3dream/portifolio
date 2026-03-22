import { track } from '@vercel/analytics';

export const analytics = {
  clickGithub: () => track('click_github'),
  clickLinkedin: () => track('click_linkedin'),
  clickYoutube: () => track('click_youtube'),
  clickEmail: () => track('click_email'),

  clickProject: (name: string) =>
    track('click_project', { name }),
};