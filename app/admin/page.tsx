import AdminPage from "@/components/Admin/AdminPage";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { getBookings } from "@/lib/db/getBookings";

export default async function Page({
    searchParams,
}: {
    searchParams?: Promise<{ page?: string; limit?: string }>;
}) {
    const params = (await searchParams) ?? {};
    const page = parseInt(params.page ?? "1", 10);
    const limit = parseInt(params.limit ?? "10", 10);

    const { bookings, totalItems, totalPages } = await getBookings({ page, limit });

    return (
        <div>
            <Navbar />
            <AdminPage
                bookings={bookings}
                page={page}
                limit={limit}
                totalItems={totalItems}
                totalPages={totalPages}
            />
            <Footer showMainLinks={false} />
        </div>
    );
}
