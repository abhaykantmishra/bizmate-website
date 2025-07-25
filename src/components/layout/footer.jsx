import Link from "next/link";
import { Youtube, Linkedin, Instagram, Facebook, Phone, Mail } from "lucide-react";
import { company_youtube, company_instagram, company_linkedin, company_facebook } from "@/constant/image";
import Image from "next/image";

const services = [
  { name: 'Recruitment Solution & Services', href: '/services/recruitment' },
  { name: 'Staffing Solutions & Services', href: '/services/staffing' },
  { name: 'Talent Management Solutions & Services', href: '/services/talent-management' },
  { name: 'HR Consultancy Services', href: '/services/hr-consultancy' },
  { name: 'HSE Services', href: '/services/hse' },
  { name: 'Customized Solutions', href: '/services/customized-solutions' },

]

export function Footer() {
    return (
      <div className="relative bg-sky-900">
        <footer className=" w-full absolute bottom-0 ] h-full bg-sky-900 text-white py-12 z-50">
        <div className="w-full  bg-sky-900 mx-auto z-50">
          <div className="w-full mx-auto bg-sky-900 grid grid-cols-1 md:grid-cols-3 gap-8 z-50 px-4 md:px-10">
            
            <div className="m-0">
              <Link href={"/"}>
              <div className="w-[250px] h-[100px] mb-4 overflow-hidden">
                <Image 
                  src="/assets/big_logo.jpeg"
                  alt="Bizmate HR Solutions Logo"
                  width={200}
                  height={40}
                  className="w-full h-full object-cover "
                />
              </div>
              </Link>
              <h3 className="text-xl font-bold mb-4">Bizmate HR Solutions</h3>
              <p className="text-blue-300 font-semibold italic">
                People, Process, Performance
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="font-medium text-white transition-colors hover:text-blue-700">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="font-medium text-white transition-colors hover:text-blue-700">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="font-medium text-white transition-colors hover:text-blue-700">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="font-medium text-white transition-colors hover:text-blue-700">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/#" className="font-medium text-white transition-colors hover:text-blue-700">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/#" className="font-medium text-white transition-colors hover:text-blue-700">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                {services.slice(0, 5).map((service, index) => (
                  <li key={index}>
                    <Link href={service.href} className="text-sky-100 hover:text-blue-400">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}

            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <address className="not-italic text-sky-100">
                <p>242 Sector-21C</p>
                <p>Faridabad, 121001</p>
                <div className="mt-5 mb-1 text-base flex items-center gap-3 group-hover:text-blue-400 transition-colors">
                    <Phone className="w-4 h-4 text-blue-300" />
                    <a href="tel:+919289397570" className="text-white hover:text-blue-400 transition-colors">
                      +91 9289397570
                    </a>
                </div>
                <div className=" flex items-center gap-3 group-hover:text-blue-400 transition-colors">
                    <Mail className="w-4 h-4 text-blue-300" />
                    <a href="mailto:info@bizmatehr.com" className="text-white neutral- hover:text-blue-400 transition-colors">
                        info@bizmatehr.com
                    </a>
                </div>
              </address>
              <div className="flex space-x-4 mt-4">
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
              </div>
            </div>

          </div>

          <div className="border-t border-sky-800 mt-8 pt-8 text-center text-sky-200">
            <p className="pb-2 md:pb-5">&copy; {new Date().getFullYear()} Bizmate HR Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </div>
    )
}