// 1080 --> 18:

export function convertToMinutesToHoursString (minutesAmount: number) {
    const hours = Math.floor( minutesAmount/60);
    const minutes = minutesAmount % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}