const Footer = () => {
    return (<>
        <footer className="bg-white text-gray-600 py-12 pt-60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-bold text-[#541A5A]">
                            AutoApply
                        </h2>
                        <p className="mt-4 text-gray-500">
                            Boost Your Job Hunt: AutoApply blends AI and expert help to apply, customize CVs, and craft cover letters.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Product</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:underline">AutoApply</a></li>
                            <li><a href="#" className="hover:underline">Build Your Resume</a></li>
                            <li><a href="#" className="hover:underline">How it works</a></li>
                            <li><a href="#" className="hover:underline">Pricing</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Resources</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:underline">Support</a></li>
                            <li><a href="#" className="hover:underline">Guides</a></li>
                        </ul>
                    </div>

                    {/* Social & Legal */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Social</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:underline">LinkedIn</a></li>
                            <li><a href="#" className="hover:underline">Tiktok</a></li>
                            <li><a href="#" className="hover:underline">Instagram</a></li>
                        </ul>
                        <h3 className="font-semibold text-gray-900 mt-6 mb-2">Legal</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:underline">Terms</a></li>
                            <li><a href="#" className="hover:underline">Privacy</a></li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-10 border-gray-200" />

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© 2024 AutoApply.Jobs All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0 text-xl">
                        <a href="#" className="hover:text-gray-700" aria-label="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="#" className="hover:text-gray-700" aria-label="TikTok">
                            <i className="fab fa-tiktok"></i>
                        </a>
                        <a href="#" className="hover:text-gray-700" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </>)
}


export default Footer;