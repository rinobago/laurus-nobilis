export function toYMD(date: Date) {
    // Converts a JS Date -> "YYYY-MM-DD" (stable string for URLs)
    return date.toISOString().slice(0, 10);
}

export function fromYMD(ymd: string) {
    // Converts "YYYY-MM-DD" -> Date at midnight UTC (prevents timezone shift)
    return new Date(`${ymd}T00:00:00.000Z`);
}

export function formatDMY(d: Date) {
    const dd = String(d.getUTCDate());
    const mm = String(d.getUTCMonth() + 1);
    const yyyy = d.getUTCFullYear();
    return `${dd}/${mm}/${yyyy}`;
}

export function nightsBetween(from?: Date, to?: Date) {
    if (!from || !to) return 0;
    const ms = to.getTime() - from.getTime();
    const days = Math.round(ms / (1000 * 60 * 60 * 24));
    return Math.max(0, days);
}
