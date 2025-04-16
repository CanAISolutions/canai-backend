export function composePrompt(template: string, vars: Record<string, string>) {
  return Object.entries(vars).reduce((acc, [key, value]) => {
    return acc.replace(new RegExp(`{{${key}}}`, 'g'), value || '');
  }, template);
}
