import { Link } from "react-router-dom"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              TECHPHILIA <span className="text-secondary">8.0</span>
            </h3>
            <p className="mb-4 text-white/90">
              The Annual Technical Fest that brings together technology enthusiasts from across the nation.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100083105208389" className="text-white hover:text-secondary transition-colors">
                <Facebook className="w-5 h-5 text-white hover:text-secondary transition-colors" />
              </a>
              <a href="https://www.instagram.com/amityuniversitypatna/" className="text-white hover:text-secondary transition-colors">
                <Instagram className="w-5 h-5 text-white hover:text-secondary transition-colors" />
              </a>
              <a href="https://x.com/amity_patna?t=6-3sCQxmfHyThTcf3h4riQ&s=09" className="text-white hover:text-secondary transition-colors">
                <Twitter className="w-5 h-5 text-white hover:text-secondary transition-colors" />
              </a>
              <a href="https://www.linkedin.com/school/amity-university-patna/" className="text-white hover:text-secondary transition-colors">
                <Linkedin className="w-5 h-5 text-white hover:text-secondary transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-white/30 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/90 hover:text-secondary transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-white/90 hover:text-secondary transition-colors font-medium">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/90 hover:text-secondary transition-colors font-medium">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="text-white/90 hover:text-secondary transition-colors font-medium">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/90 hover:text-secondary transition-colors font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/90 hover:text-secondary transition-colors font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-white/30 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-secondary mt-1 flex-shrink-0" />
                <span className="text-white/90 font-medium">Amity University, Rupaspur Campus, Patna, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-secondary flex-shrink-0" />
                <span className="text-white/90 font-medium">+91 6206882275</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-secondary flex-shrink-0" />
                <span className="text-white/90 font-medium">aiit@ptn.amity.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-white/90">© {currentYear} TECHPHILIA 8.0 Developed by AIIT Students. </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

