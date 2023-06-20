export function getDateTime(dateString: string) {
  const date = new Date(dateString);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "UTC",
  }).format(date);
  return formattedDate;
}
export function checkSearch(text: string | null, index: string) {
  if (text === null) return false;
  return text.toLowerCase().includes(index.toLowerCase());
}
