import { formatDistance } from 'date-fns';

/**
 * Formats a date to a human readable format
 * @param lastUpdated last date of repository update
 * @returns a formatted date string with the last updated datetime
 */
export const formatDate = (lastUpdated: Date) =>
  formatDistance(lastUpdated, new Date(), { addSuffix: true });
