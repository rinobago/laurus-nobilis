import { FlagCS, FlagDE, FlagEN, FlagES, FlagFR, FlagHR, FlagHU, FlagIT, FlagPL, FlagSL } from "../svg_icons/Flags";

const FLAG_MAP: Record<string, React.ReactNode> = {
    en: <FlagEN />,
    de: <FlagDE />,
    sl: <FlagSL />,
    cs: <FlagCS />,
    es: <FlagES />,
    hr: <FlagHR />,
    it: <FlagIT />,
    pl: <FlagPL />,
    hu: <FlagHU />,
    fr: <FlagFR />,
};

export default function LanguageButton({ locale }: { locale: string }) {
    return (
        <div className="flex w-full items-center justify-center cursor-pointer" draggable={false} aria-label={`Change language (current: ${locale})`}>
            {FLAG_MAP[locale] ?? null}
        </div>
    );
}
