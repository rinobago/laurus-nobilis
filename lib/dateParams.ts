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

export function parseDMY(dmy: string) {
    const [d, m, y] = dmy.split("/").map(Number);
    return new Date(Date.UTC(y, m - 1, d));
}

export function nightsBetween(from?: Date, to?: Date) {
    if (!from || !to) return 0;
    const ms = to.getTime() - from.getTime();
    const days = Math.round(ms / (1000 * 60 * 60 * 24));
    return Math.max(0, days);
}

export function pricePerNight(to?: Date) {
    if (!to) return 0;

    const m = to.getUTCMonth() + 1; // 1 - 12
    const d = to.getUTCDate(); // 1 - 31

    // 1.11 - 1.3 (Nov 1 -> Mar 1)
    if ((m === 11 && d >= 1) || m === 12 || m === 1 || m === 2 || (m === 3 && d <= 1)) {
        return 150;
    }

    // 2.3 - 30.5 (Mar 2 -> May 30)
    if ((m === 3 && d >= 2) || m === 4 || (m === 5 && d <= 30)) {
        return 200;
    }

    // 1.6 - 31.10 (Jun 1 -> Oct 31)
    if ((m === 6 && d >= 1) || m === 7 || m === 8 || m === 9 || (m === 10 && d <= 31)) {
        return 300;
    }

    return 0;
}

export function seasonLabel(to?: Date) {
    if (!to) return "";

    const m = to.getUTCMonth() + 1; // 1–12
    const d = to.getUTCDate(); // 1–31

    // 1.11 – 1.3 (Nov 1 → Mar 1)
    if ((m === 11 && d >= 1) || m === 12 || m === 1 || m === 2 || (m === 3 && d <= 1)) {
        return "Izvan sezone";
    }

    // 2.3 – 30.5 (Mar 2 → May 30)
    if ((m === 3 && d >= 2) || m === 4 || (m === 5 && d <= 30)) {
        return "Sredina sezone";
    }

    // 1.6 – 31.10 (Jun 1 → Oct 31)
    if ((m === 6 && d >= 1) || m === 7 || m === 8 || m === 9 || (m === 10 && d <= 31)) {
        return "Unutar sezone";
    }

    return "";
}
