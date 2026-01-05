export default function TermsOfService() {
    return (
        <section className="flex flex-col items-center bg-beige">
            <div className="flex flex-col container items-center text-black text-left">
                <div className="w-full flex flex-col gap-32">
                    <h1 className="w-full text-[clamp(40px,5.56vw,80px)] leading-120 font-bold">Terms of Service</h1>
                    <div className="w-full flex flex-col gap-32">
                        <p className="paragraph-h3">
                            Last updated: <time dateTime="2026-01-05">January 5, 2026</time>
                        </p>
                        <p className="paragraph-text">
                            These Terms of Service govern your use of <span className="font-bold">[Website URL]</span> and the booking of the holiday apartment{" "}
                            <span className="font-bold">Laurus Nobilis</span>.
                        </p>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">1. Scope of Service</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>Our website allows users to:</p>
                        <ul className="list-disc pl-3.5 marker:text-10 marker:text-black">
                            <li>View information about the apartment</li>
                            <li>Check availability</li>
                            <li>Submit booking requests</li>
                            <li>Complete reservations and payments</li>
                        </ul>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">2. Eligibility</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>By making a reservation, you confirm that you are at least 18 years old and legally capable of entering into a binding agreement.</p>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">3. Reservations</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <ul className="list-disc pl-3.5 marker:text-10 marker:text-black">
                            <li>A reservation is considered confirmed only after successful payment and confirmation</li>
                            <li>All booking details provided must be accurate</li>
                            <li>We reserve the right to refuse or cancel a booking if incorrect or misleading information is provided</li>
                        </ul>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">4. Payments</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <ul className="list-disc pl-3.5 marker:text-10 marker:text-black">
                            <li>Prices are displayed in EUR</li>
                            <li>Payments are processed securely through third-party payment providers (e.g. Stripe)</li>
                            <li>We do not store card details</li>
                        </ul>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">5. Use of the Website</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>You agree not to:</p>
                        <ul className="list-disc pl-3.5 marker:text-10 marker:text-black">
                            <li>Use the website for unlawful purposes</li>
                            <li>Attempt to interfere with website functionality</li>
                            <li>Misuse or attempt unauthorized access to our systems</li>
                        </ul>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">6. Intellectual Property</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>
                            All content on this website (text, images, design) is owned by or licensed to <span className="font-bold">Laurus Nobilis</span> and may not be used without permission.
                        </p>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">7. Liability</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>We are not responsible for:</p>
                        <ul className="list-disc pl-3.5 marker:text-10 marker:text-black">
                            <li>Temporary unavailability of the website</li>
                            <li>Indirect or consequential damages</li>
                            <li>Issues caused by force majeure events</li>
                        </ul>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">8. Governing Law</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>
                            These Terms are governed by the laws of <span className="font-bold">Croatia</span>.
                        </p>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">9. Contact</h2>
                    <div className="paragraph-text flex flex-col">
                        <p>For questions regarding these Terms, contact:</p>
                        <p className="font-bold">[Contact Email]</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
