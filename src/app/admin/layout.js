import Adminheader from "@/components/AdminHeader";

export default function AdminLayout({ children }) {
    return (
        <section>
            <Adminheader />
            {children}
        </section>
    )
}