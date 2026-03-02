export type Booking = {
    id: string;
    name: string;
    date: string;
    guests: number;
    price: number;
    status: "confirmed" | "refunded" | "cancelled";
};
