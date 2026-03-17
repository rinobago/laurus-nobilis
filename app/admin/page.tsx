import AdminPage from "@/components/Admin/AdminPage";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { getBookings } from "@/lib/db/getBookings";

export default async function Page({
    searchParams,
}: {
    searchParams?: Promise<{ page?: string; limit?: string; filter?: string; q?: string }>;
}) {
    const params = (await searchParams) ?? {};
    const page = parseInt(params.page ?? "1", 10);
    const limit = parseInt(params.limit ?? "10", 10);
    const filterOption = params.filter ?? null;
    const q = params.q ?? null;

    const { bookings, totalItems, totalPages } = await getBookings({
        page,
        limit,
        filterOption,
        q,
    });

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
