'use client'

import { motion } from 'framer-motion'

const clients = [
    { name: 'Client A', sector: 'Defence' },
    { name: 'Client B', sector: 'Healthcare' },
    { name: 'Client C', sector: 'Education' },
    { name: 'Client D', sector: 'Industrial' },
    { name: 'Client E', sector: 'Retail' },
    { name: 'Client F', sector: 'Government' },
]

export function SwissTrustClients() {
    return (
        <section className="border-t border-pencil-200 bg-white px-6 py-16 lg:px-16 dark:bg-pencil-950 dark:border-white/10">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
                {/* Label */}
                <p className="swiss-mono shrink-0 text-pencil-500">Trusted By</p>

                {/* Clients */}
                <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
                    {clients.map((client, index) => (
                        <motion.div
                            key={client.name}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group text-center"
                        >
                            <span className="text-lg font-medium text-pencil-600 transition-colors group-hover:text-cta dark:text-white/80">
                                {client.name}
                            </span>
                            <span className="swiss-mono ml-2 text-pencil-600">{client.sector}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
