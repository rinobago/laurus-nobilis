import CookiePreferencesText from "./CookiePreferencesText";

export default function PrivacyPolicy() {
    return (
        <section className="flex flex-col items-center bg-beige">
            <div className="flex flex-col container items-center text-black text-left">
                <div className="w-full flex flex-col gap-32">
                    <h1 className="w-full text-[clamp(40px,5.56vw,80px)] leading-120 font-bold">
                        Privacy Policy
                    </h1>
                    <div className="w-full flex flex-col gap-32">
                        <p className="paragraph-h3">
                            Last updated: <time dateTime="2026-01-05">January 5, 2026</time>
                        </p>
                        <div className="paragraph-text flex flex-col gap-16">
                            <p>
                                This Privacy Policy explains how{" "}
                                <span className="font-bold">Laurus Nobilis</span> collects, uses,
                                and protects your personal data when you visit and use our website
                                <span className="font-bold">[Website URL]</span> to inquire about or
                                book our holiday apartment located in Lovran, Croatia.
                            </p>
                            <p>
                                We are committed to protecting your privacy and processing personal
                                data in accordance with the General Data Protection Regulation
                                (GDPR) and applicable Croatian and EU data protection laws.
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">1. Information We Collect</h2>
                    <div className="w-full flex flex-col gap-32">
                        <h3 className="paragraph-h3">1.1 Personal Data You Provide</h3>
                        <div className="paragraph-text flex flex-col gap-16">
                            <p>
                                When you use our website or make a reservation, we may collect the
                                following personal data:
                            </p>
                            <ul className="list-disc pl-3.5 marker:text-10 marker:text-black">
                                <li>First and last name</li>
                                <li>Email address</li>
                                <li>Phone number</li>
                                <li>Country of residence</li>
                                <li>
                                    Booking details (check-in date, check-out date, number of
                                    guests)
                                </li>
                                <li>
                                    Payment-related information (processed securely by our payment
                                    provider)
                                </li>
                                <li>Any message or special request you submit during booking</li>
                            </ul>
                            <p>
                                We do <span className="font-bold">not</span> store full payment card
                                details on our servers.
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h3 className="paragraph-h3">1.2 Automatically Collected Data</h3>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>When you browse our website, we may automatically collect:</p>
                        <ul className="list-disc pl-3.5 marker:text-10 marker:text-black">
                            <li>IP address</li>
                            <li>Browser type and version</li>
                            <li>Device type</li>
                            <li>Pages visited and time spent on the website</li>
                            <li>Referring website or source</li>
                        </ul>
                        <p>
                            This data is used only for security, analytics, and website improvement.
                        </p>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h3 className="paragraph-h3">1.3 Cookies</h3>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>
                            We use cookies and similar technologies to ensure proper website
                            functionality and to analyze website traffic. Details are provided in
                            our{" "}
                            <CookiePreferencesText className="font-bold underline cursor-pointer" />{" "}
                            banner.
                        </p>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">2. How We Use Your Data</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>We use your personal data to:</p>
                        <ul className="list-disc pl-3.5 marker:text-10 marker:text-black">
                            <li>Process and manage apartment reservations</li>
                            <li>Communicate with you regarding your booking</li>
                            <li>Send booking confirmations and essential information</li>
                            <li>Process payments securely</li>
                            <li>Comply with legal and tax obligations</li>
                            <li>Improve our website and user experience</li>
                        </ul>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">3. Legal Basis for Processing</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>We process your personal data based on:</p>
                        <ul className="list-disc pl-3.5 marker:text-10 marker:text-black">
                            <li>Performance of a contract (booking and accommodation services)</li>
                            <li>Your consent (where applicable)</li>
                            <li>Compliance with legal obligations</li>
                            <li>Legitimate interests (website security and improvement)</li>
                        </ul>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">4. Data Sharing</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>We may share your data only with:</p>
                        <ul className="list-disc pl-3.5 marker:text-10 marker:text-black">
                            <li>
                                <span className="font-bold">Payment processors</span> (e.g. Stripe)
                                for secure payment handling
                            </li>
                            <li>
                                <span className="font-bold">
                                    Hosting and technical service providers
                                </span>{" "}
                                necessary for website operation
                            </li>
                            <li>
                                <span className="font-bold">Legal or tax authorities</span>, when
                                required by law
                            </li>
                        </ul>
                        <p>We never sell your personal data.</p>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">5. Data Retention</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>We retain personal data only for as long as necessary to:</p>
                        <ul className="list-disc pl-3.5 marker:text-10 marker:text-black">
                            <li>Fulfill booking and legal obligations</li>
                            <li>Comply with accounting and tax regulations</li>
                        </ul>
                        <p>After this period, data is securely deleted.</p>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">6. Your Rights</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>You have the right to:</p>
                        <ul className="list-disc pl-3.5 marker:text-10 marker:text-black">
                            <li>Access your personal data</li>
                            <li>Request correction of inaccurate data</li>
                            <li>Request deletion (where legally possible)</li>
                            <li>Restrict or object to processing</li>
                            <li>Data portability</li>
                            <li>Withdraw consent at any time</li>
                        </ul>
                        <p>
                            Requests can be sent to{" "}
                            <span className="font-bold">[Contact Email]</span>.
                        </p>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">7. Data Security</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>
                            We use appropriate technical and organizational measures to protect your
                            personal data against unauthorized access, loss, or misuse.
                        </p>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">8. International Transfers</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>
                            Some data may be processed outside your country (e.g. by payment
                            providers). In such cases, appropriate safeguards are applied.
                        </p>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">9. Changes to This Policy</h2>
                    <div className="paragraph-text flex flex-col gap-16">
                        <p>
                            We may update this Privacy Policy from time to time. Any changes will be
                            posted on this page.
                        </p>
                    </div>
                </div>
                <hr className="w-full my-[48px] h-px border-0 bg-beige-darkest" />
                <div className="w-full flex flex-col gap-32">
                    <h2 className="paragraph-h2">10. Contact</h2>
                    <div className="paragraph-text flex flex-col">
                        <p>For privacy-related questions, contact us at:</p>
                        <p className="font-bold">[Contact Email]</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
