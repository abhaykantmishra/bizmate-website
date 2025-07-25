import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Instagram, Linkedin, Twitter, Facebook, Youtube } from 'lucide-react'
import Link from "next/link"
import { company_facebook, company_instagram, company_linkedin, company_twitter, company_youtube } from "@/constant/image"

export function ContactForm() {
  return (
    <section className="md:mt-20 mb-10 my-10">
        <div className="max-w-6xl mx-auto flex flex-col justify-center">
            <div className="flex md:flex-row  flex-col bg-black shadow-2xl shadow-blue-700 p-3 rounded-none md:rounded-lg z-20 md:px-10 mx-2 md:mx-10">

                <div className="md:w-1/2 w-full space-y-8 z-20 md:mx-10 text-white my-10 md:my-5">
                    <div>
                    <h2 className="text-xl md:text-3xl font-bold mb-2">Get in Touch</h2>
                    <p className="md:text-lg text-base text-neutral-400">Have questions? We&apos;d love to hear from you.</p>
                    </div>
                    <form className="space-y-6">
                    <div className="space-y-2">
                        <Label className="md:text-lg" htmlFor="name">Name</Label>
                        <Input
                        id="name"
                        placeholder="Your name"
                        className="md:text-lg rounded-none bg-white/5 border-white text-white placeholder:text-neutral-200"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label className="md:text-lg" htmlFor="email">Email</Label>
                        <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="md:text-lg rounded-none bg-white/5 border-white text-white placeholder:text-neutral-200"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label className="md:text-lg" htmlFor="message">Message</Label>
                        <Textarea
                        id="message"
                        placeholder="Your message"
                        className="min-h-[130px] md:text-lg rounded-none bg-white/5 border-white text-white placeholder:text-neutral-200"

                        />
                    </div>
                    <Button className="w-full rounded-none hover:bg-white hover:text-black transition-colors border border-white">
                        Send Message
                    </Button>
                    </form>
                </div>

                <div className="md:hidden block w-full h-[1px] bg-white my-10"></div>

                <div className="md:w-1/2 my-10 w-full space-y-8 z-20 md:mx-10 text-white md:my-5">
                    <div>
                    <h2 className="text-xl md:text-3xl font-bold mb-2">Contact Information</h2>
                    <p className="md:text-lg text-neutral-400">Reach out to us through any of these channels.</p>
                    </div>
                    
                    <div className="space-y-6">
                    {/* Website Queries */}
                    {/* <div>
                        <h3 className="text-lg font-semibold mb-4 text-purple-400">Website Queries</h3>
                        <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-purple-400" />
                            <a href="tel:+917488858825" className="text-neutral-400 hover:text-white transition-colors">
                            +91 0000 000000 (XYZ)
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-purple-400" />
                            <a href="mailto:webops_query@bizmatehr.com" className="text-neutral-400 hover:text-white transition-colors">
                            query@bizmatehr.com
                            </a>
                        </div>
                        </div>
                    </div> */}

                    {/* General Queries */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-purple-400">General Queries</h3>
                        <div className="space-y-4">
                        <div className="text-base flex items-center gap-3">
                            <Phone className="w-5 h-5 text-purple-400" />
                            <a href="tel:+919289397570" className="text-neutral-400 hover:text-white transition-colors">
                            +91 9289397570
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-purple-400" />
                            <a href="mailto:info@bizmatehr.com" className="text-neutral-400 hover:text-white transition-colors">
                                info@bizmatehr.com
                            </a>
                        </div>
                        </div>
                    </div>

                    {/* Location */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-purple-400">Location</h3>
                        <div className="flex flex-row items-center gap-3">
                            <MapPin className="w-5 h-5 text-purple-400" />

                            <p className="text-neutral-400">
                                242 Sector-21C<br/> Faridabad, 121001
                            </p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-purple-400">Follow Us</h3>
                        <div className="flex gap-4">
                        <a
                            href={company_youtube}
                            className="w-10 h-10 bg-white/5 hover:bg-white/10 flex items-center justify-center rounded-full transition-colors"
                            aria-label="YouTube"
                        >
                            <Youtube className="w-5 h-5" />
                        </a>
                        <a
                            href={company_linkedin}
                            className="w-10 h-10 bg-white/5 hover:bg-white/10 flex items-center justify-center rounded-full transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href={company_instagram}
                            className="w-10 h-10 bg-white/5 hover:bg-white/10 flex items-center justify-center rounded-full transition-colors"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a
                            href={company_facebook}
                            className="w-10 h-10 bg-white/5 hover:bg-white/10 flex items-center justify-center rounded-full transition-colors"
                            aria-label="Facebook"
                        >
                            <Facebook className="w-5 h-5" />
                        </a>
                        {/* <a
                            href="#"
                            className="w-10 h-10 bg-white/5 hover:bg-white/10 flex items-center justify-center rounded-full transition-colors"
                            aria-label="Twitter"
                        >
                            <Twitter className="w-5 h-5" />
                        </a> */}
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}