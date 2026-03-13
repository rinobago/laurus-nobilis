export default function ChangeDatesConfirm({
    open,
    onSave,
    onCancel,
    loading = false,
}: {
    open: boolean;
    onSave: () => void;
    onCancel: () => void;
    loading?: boolean;
}) {
    if (!open) return null;

    return (
        <div className="fixed flex justify-center items-center inset-0 z-1400 bg-black/30 px-24">
            <div className="flex flex-col w-fit h-fit gap-24 md:gap-32 justify-center items-center px-32 pb-16 pt-24 bg-beige border border-beige-darkest rounded-xl">
                <div className="w-full text-center text-black font-semibold text-[24px] md:text-h3 leading-120">
                    Jesi li siguran da želiš promijeniti datume?
                </div>
                <div className="flex w-fit gap-8 justify-center items-center">
                    <button
                        disabled={loading}
                        onClick={onSave}
                        className="btn-brown">
                        {loading ? "Spremanje..." : "Jesam"}
                    </button>
                    <button
                        disabled={loading}
                        onClick={onCancel}
                        className="btn-brown-outline">
                        Nisam
                    </button>
                </div>
            </div>
        </div>
    );
}
