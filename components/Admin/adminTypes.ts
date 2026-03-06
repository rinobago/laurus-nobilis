export type Booking = {
    id: string;
    name: string;
    date: string;
    guests: number;
    price: number;
    status: Status;
};

export type Status = "active" | "cancelled" | "refunded";
