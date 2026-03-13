export type Booking = {
    booking_id: string;
    checkin_date: string;
    checkout_date: string;
    guests_count: number;
    status: Status;
    created_at: string;
    first_name: string | null;
    last_name: string | null;
    email: string | null;
    phone: string | null;
    paymentIntentId: string | null;
    total_amount: number | null;
};

export type Status = "active" | "canceled" | "refunded";
