type Locale = string;

export default function LanguageButton({ locale }: { locale: Locale }) {
    return (
        <button type="button" className="flex w-full items-center justify-center cursor-pointer" aria-label={`Change language (current: ${locale})`}>
            <img src={`/icons/flags/${locale}.svg`} alt="Language button" className="w-full aspect-square" draggable={false} />
        </button>
    );
}
