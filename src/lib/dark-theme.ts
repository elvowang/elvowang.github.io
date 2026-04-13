/** Inline CSS variables for the dark theme used on AI Explore pages.
 *  Setting these inline ensures they survive browser back/forward cache
 *  without depending on CSS class resolution timing. */
export const darkThemeStyle: React.CSSProperties & Record<string, string> = {
  background: '#0a0a0a',
  color: '#ededed',
  '--color-background': '#0a0a0a',
  '--color-foreground': '#ededed',
  '--color-card': '#0a0a0a',
  '--color-card-foreground': '#ededed',
  '--color-primary': '#ededed',
  '--color-primary-foreground': '#0a0a0a',
  '--color-secondary': '#1a1a1a',
  '--color-secondary-foreground': '#ededed',
  '--color-muted': '#1a1a1a',
  '--color-muted-foreground': '#a0a0a0',
  '--color-accent': '#1a1a1a',
  '--color-accent-foreground': '#ededed',
  '--color-border': '#2a2a2a',
  '--color-input': '#2a2a2a',
  '--color-ring': '#ededed',
};
