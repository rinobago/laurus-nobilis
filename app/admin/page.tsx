import AdminPage from "@/components/Admin/AdminPage";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function Page() {
    return (
        <div>
            <Navbar />
            <AdminPage />
            <Footer showMainLinks={false} />
        </div>
    );
}
