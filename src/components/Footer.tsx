function Footer() {
    return (
      <footer className="bg-black text-gray-400 py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
            <p className="mb-4">
             Collaborate and create something great together!
            </p>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Follow Me</h2>
            <div className="flex flex-col">
            <a
              href="https://www.facebook.com/profile.php?id=61558234102831&mibextid=ZbWKwL"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="https://x.com/RakshitSrinjoy?t=CaX5bhFz19RHPYVL0ulIlA&s=08"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/me_srinjoy?utm_source=qr&igsh=eXY4eHFsMmNjdTM2"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/srinjoy-rakshit-6a814b21b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="hover:text-white transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">My Address</h2>
            <p>Uttarradha krishnapur, Haripal, Hooghly</p>
            <p>West Bengal 712403</p>
            <p>Email: srinjoyrakshit2003@gmail.com</p>
            <p>Phone: +91 9474196910</p>
          </div>
          </div>
          <p className="text-center text-xl pt-8">© Srinjoyrakshitportfolio. All rights reserved.</p>
      </footer>
    )
  }
  
  export default Footer