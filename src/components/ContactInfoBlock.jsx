"use client"
import { motion } from "framer-motion";
import { contactInfo } from "@/data/contactData";

const icons = {
    phone: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
        </svg>
    ),
    location: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
        </svg>
    ),
    email: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
        </svg>
    ),
};

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.25 } },
};

const item = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function ContactInfoBlock() {
    return (
        <section className="pt-5 pb-0">
            <div className="max-w-4xl my-0 mx-auto p-12 rounded-2xl bg-white drop-shadow-xl border border-gray-300">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-10"
                >
                    {contactInfo.map((entry) => (
                        <motion.div
                            key={entry.id}
                            variants={item}
                            whileHover={{ x: 5 }}
                            className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 md:gap-8"
                        >
                            <h3 className="text-sky-500 text-lg font-semibold flex items-center gap-3">
                                {icons[entry.icon]}
                                {entry.label}
                            </h3>

                            <div className="text-black space-y-1 pl-7 md:pl-0">
                                {entry.lines.map((line, i) => {
                                    const content = typeof line === "string"
                                        ? line
                                        : (
                                            <span className="grid grid-cols-[90px_1fr] w-full">
                                                <span className="text-gray-500">{line.label}</span>
                                                <span>{line.number}</span>
                                            </span>
                                        );

                                    return entry.href ? (
                                        <a key={i} href={entry.href} className="block hover:text-sky-500 transition-colors text-black">
                                            {line.item || line}
                                        </a>
                                    ) : (
                                        <p key={i} className="grid grid-cols-[90px_1fr]">
                                            <span className="text-gray-500">{line.label}</span>
                                            <span>{line.item}</span>
                                        </p>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default ContactInfoBlock;