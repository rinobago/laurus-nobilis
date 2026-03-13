export default function RefundConfirm({
    open,
    onSave,
    onCancel,
    percentage = 50,
    loading,
}: {
    open: boolean;
    onSave: () => void;
    onCancel: () => void;
    percentage: 50 | 90 | 100;
    loading: boolean;
}) {
    if (!open) return null;

    return (
        <div className="fixed flex justify-center items-center inset-0 z-1400 bg-black/30 px-24">
            <div className="flex flex-col w-fit h-fit gap-24 md:gap-32 justify-center items-center px-32 pb-16 pt-24 bg-beige border border-beige-darkest rounded-xl">
                <div className="w-full text-center text-black font-semibold text-[24px] md:text-h3 leading-120">
                    Jesi li siguran da želiš izvršiti povrat novca?
                </div>
                <div className="w-full text-center text-black font-semibold text-[24px] md:text-h3 leading-120">
                    {percentage}%
                </div>
                <div className="flex w-fit gap-8 justify-center items-center">
                    <button
                        onClick={onSave}
                        disabled={loading}
                        className="btn-brown">
                        Jesam
                    </button>
                    <button
                        onClick={onCancel}
                        disabled={loading}
                        className="btn-brown-outline">
                        Nisam
                    </button>
                </div>
            </div>
        </div>
    );
}
