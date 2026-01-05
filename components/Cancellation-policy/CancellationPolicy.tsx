export default function CancellationPolicy() {
    return (
        <section className="flex flex-col items-center bg-beige">
            <div className="flex flex-col container items-center text-black text-left">
                <div className="w-full flex flex-col gap-32">
                    <h1 className="w-full text-[clamp(40px,5.56vw,80px)] leading-120 font-bold">Cancellation Policy</h1>
                    <div className="w-full flex flex-col gap-32">
                        <p className="paragraph-h3">
                            Last updated: <time dateTime="2026-01-05">January 5, 2026</time>
                        </p>
                        <p className="paragraph-text">
                            This Cancellation Policy applies to all reservations made for the holiday apartment <span className="font-bold">Laurus Nobilis</span> via{" "}
                            <span className="font-bold">[Website URL]</span>.
                        </p>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">1. Cancellation by the Guest</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>
                            Guests may cancel their reservation by contacting us via email at <span className="font-bold">[Contact Email]</span>.
                        </p>
                        <p>Refunds are issued according to the following rules:</p>
                        <ul className="list-disc pl-3.5 marker:text-10 marker:text-black">
                            <li>
                                <span className="font-bold">Cancellations made more than 14 days before the scheduled check-in date</span> are eligible for a{" "}
                                <span className="font-bold">90% refund</span> of the total booking amount.
                            </li>
                            <li>
                                <span className="font-bold">Cancellations made within 14 days of the scheduled check-in date</span> are eligible for a <span className="font-bold">50% refund</span> of
                                the total booking amount.
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">2. Refund Processing</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <ul className="list-disc pl-3.5 marker:text-10 marker:text-black">
                            <li>Refunds are issued to the original payment method used at checkout.</li>
                            <li>Processing times may vary depending on the payment provider.</li>
                            <li>Any applicable transaction fees charged by third-party payment processors are non-refundable.</li>
                        </ul>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">3. No-Shows and Early Departure</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <ul className="list-disc pl-3.5 marker:text-10 marker:text-black">
                            <li>
                                Guests who do not arrive on the scheduled check-in date without prior notice <span className="font-bold">(no-show)</span> are not eligible for a refund.
                            </li>
                            <li>Early departure after check-in does not entitle the guest to a refund for unused nights.</li>
                        </ul>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">4. Changes to Reservations</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>
                            Requests to change booking dates or guest details are subject to availability and may result in a price adjustment. Changes made close to the check-in date may be treated
                            as a cancellation under this policy.
                        </p>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">5. Cancellation by the Host</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>
                            In the unlikely event that we must cancel a reservation due to unforeseen circumstances, guests will receive a full refund <span className="font-bold">(100%)</span> of all
                            payments made.
                        </p>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">6. Policy Acceptance</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>By completing a reservation, you acknowledge that you have read, understood, and agreed to this Cancellation Policy.</p>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">7. Contact</h2>
                    <div className="paragraph-text flex flex-col">
                        <p>For cancellation requests or questions regarding this policy, please contact us at:</p>
                        <p className="font-bold">[Contact Email]</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
