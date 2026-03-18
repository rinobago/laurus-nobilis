export function formatDecimal(value: number | null | undefined, fractionDigits = 2) {
    if (value === null || value === undefined) {
        return;
    }
    return new Intl.NumberFormat("hr-HR", {
        minimumFractionDigits: fractionDigits,
        maximumFractionDigits: fractionDigits,
    }).format(value);
}
