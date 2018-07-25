import {IDate} from "../types";

export function formatDate(date: IDate) {
  const d = new Date(date);
  return `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
}

export function humanizeDuration (durationMs: number) {
  function numberEnding (number: number) {
    return (number > 1) ? 's' : '';
  }

  let durationSec = Math.floor(durationMs / 1000);
  const years = Math.floor(durationSec / 31536000);
  if (years > 0) {
    return `${years} year${numberEnding(years)} ago`;
  }

  const days = Math.floor((durationSec %= 31536000) / 86400);
  if (days > 0) {
    return `${days} day${numberEnding(days)} ago`;
  }
  const hours = Math.floor((durationSec %= 86400) / 3600);
  if (hours > 0) {
    return `${hours} hour${numberEnding(hours)} ago`;
  }
  const minutes = Math.floor((durationSec %= 3600) / 60);
  if (minutes > 0) {
    return `${minutes} minute${numberEnding(minutes)} ago`;
  }

  return 'less than a minute ago';
}
