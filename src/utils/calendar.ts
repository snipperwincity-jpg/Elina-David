/**
 * Calendar generation utility for Elina & David's Wedding
 * October 18, 2026 at The Glass House, ICC Abuja
 */

export const WEDDING_EVENT = {
  title: 'Elina & David — Wedding Celebration',
  description: 'Together Forever. Celebrating the marriage of Elina & David. Venue: The Glass House, ICC Abuja. Dress Code: Black Tie / Elegant Formal (Soft neutrals & champagne).',
  location: 'The Glass House, International Conference Centre (ICC), 1111 Herbert Macaulay Way, Central Business District, Abuja, Nigeria',
  startDate: '20261018T143000Z', // 3:30 PM WAT (UTC+1) = 14:30 UTC
  endDate: '20261018T220000Z',   // 11:00 PM WAT (UTC+1) = 22:00 UTC
  readableDate: 'Sunday, October 18, 2026',
  readableTime: '3:30 PM – 11:00 PM (WAT)',
};

export function getGoogleCalendarUrl(): string {
  const base = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
  const text = encodeURIComponent(WEDDING_EVENT.title);
  const details = encodeURIComponent(WEDDING_EVENT.description);
  const location = encodeURIComponent(WEDDING_EVENT.location);
  const dates = `${WEDDING_EVENT.startDate}/${WEDDING_EVENT.endDate}`;

  return `${base}&text=${text}&dates=${dates}&details=${details}&location=${location}`;
}

export function downloadIcsFile(): void {
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Elina & David//Wedding Invitation//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `SUMMARY:${WEDDING_EVENT.title}`,
    `DESCRIPTION:${WEDDING_EVENT.description}`,
    `LOCATION:${WEDDING_EVENT.location}`,
    `DTSTART:${WEDDING_EVENT.startDate}`,
    `DTEND:${WEDDING_EVENT.endDate}`,
    'STATUS:CONFIRMED',
    'TRANSP:OPAQUE',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', 'elina-david-wedding.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
