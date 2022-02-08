/**
 * Formats a stargazer count to a human readable format
 * @param count total stargazers count
 * @returns a formatted stargazers count string
 */
export const formatCount = (count: number) =>
  new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short',
  }).format(count);
