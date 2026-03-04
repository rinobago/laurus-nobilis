import CalendarFilter from "./CalendarFilter";

export default function CalendarModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    if (!open) return null;

    return (
        <div
            onMouseDown={(e) => {
                // Backdrop click (mobile fixed inset-0)
                if (e.target === e.currentTarget) onClose();
            }}
            className="fixed inset-0 flex items-center justify-center sm:absolute sm:inset-auto sm:top-full sm:left-1/2 sm:-translate-x-1/2 sm:mt-[8px] sm:block">
            <div className="flex w-fit justify-center items-center rounded-xl bg-beige-dark border border-beige-darker p-12">
                <div className="flex justify-center items-center w-fit bg-beige border border-beige-darker rounded-lg p-12">
                    <CalendarFilter />
                </div>
            </div>
        </div>
    );
}
