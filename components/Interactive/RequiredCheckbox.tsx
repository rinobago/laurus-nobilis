import { Check } from "../svg_icons/Check";

type RequiredCheckboxProps = {
    id: string;
    name: string;
    required?: boolean;
};

export default function RequiredCheckbox({ id, name, required = true }: RequiredCheckboxProps) {
    return (
        <div className="relative w-20 h-20">
            <input id={id} name={name} type="checkbox" form="payment-form" required={required} className="peer absolute inset-0 opacity-0 cursor-pointer" />

            <div className="pointer-events-none w-20 h-20 rounded-sm border border-beige-darker bg-beige-dark flex items-center justify-center peer-checked:bg-brown-100 peer-checked:border-button-border peer-focus-visible:ring-2 peer-focus-visible:ring-brown-160 peer-checked:[&_svg]:opacity-100">
                <Check className="w-12 stroke-white stroke-2 opacity-0" />
            </div>
        </div>
    );
}
