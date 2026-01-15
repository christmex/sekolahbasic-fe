import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 pt-16"> 
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-6"> 
                            <div className="h-8 w-8 rounded flex items-center justify-center text-white font-bold text-xs">
                                <img src="logo-sekolah-basic.gif" alt="" />
                            </div> 
                            <div className="leading-tight text-xs uppercase tracking-wide font-bold text-black"> Sekolah <br />Kristen BASIC </div> 
                        </div> 
                        <p className="text-xs text-gray-500 leading-relaxed mb-6">
                            Educating for eternity. Transforming lives through Christ-centered education since 2004.
                        </p>
                        <div className="flex gap-4 text-gray-400"> 
                            <a href="#"><Facebook className="w-4 h-4 hover:text-[#9e1b66] transition-colors" /></a> 
                            <a href="#"><Instagram className="w-4 h-4 hover:text-[#9e1b66] transition-colors" /></a> 
                            <a href="#"><Linkedin className="w-4 h-4 hover:text-[#9e1b66] transition-colors" /></a> 
                            <a href="#"><Youtube className="w-4 h-4 hover:text-[#9e1b66] transition-colors" /></a> 
                        </div> 
                    </div>
                    
                    <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-4">School</h4>
                        <ul className="space-y-2 text-xs text-gray-500">
                            <li><a href="#" className="hover:text-[#9e1b66] transition-colors">TK Basic 1 &amp; 2</a></li>
                            <li><a href="#" className="hover:text-[#9e1b66] transition-colors">SD Basic 1 &amp; 2</a></li>
                            <li><a href="#" className="hover:text-[#9e1b66] transition-colors">SMP Basic 1 &amp; 2</a></li>
                            <li><a href="#" className="hover:text-[#9e1b66] transition-colors">SMA Basic 1 &amp; 2</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-xs text-gray-500">
                            <li><a href="#" className="hover:text-[#9e1b66] transition-colors">Admissions Portal</a></li>
                            <li><a href="#" className="hover:text-[#9e1b66] transition-colors">Academic Calendar</a></li>
                            <li><a href="#" className="hover:text-[#9e1b66] transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-[#9e1b66] transition-colors">Alumni</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-4">Contact</h4>
                        <ul className="space-y-2 text-xs text-gray-500">
                            <li className="flex items-start gap-2"><MapPin className="w-3 h-3 mt-0.5" /> Batam, Indonesia</li>
                            <li className="flex items-center gap-2"><Phone className="w-3 h-3" /> +62 778 1234 5678</li>
                            <li className="flex items-center gap-2"><Mail className="w-3 h-3" /> info@sekolahbasic.sch.id</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400"> 
                    <p>&copy; 2026 Sekolah Kristen BASIC. All rights reserved. | Powered By Jonathan Christiani</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-gray-600">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-600">Terms of Service</a>
                        <a href="#" className="hover:text-gray-600">Sitemap</a>
                    </div>
                </div> 
            </div> 

            <div className="h-2 flex w-full mt-2">
                <div className="h-full w-1/3 bg-[#DE5127]"></div>
                <div className="h-full w-1/3 bg-[#3AA549]"></div>
                <div className="h-full w-1/3 bg-[#0185C3]"></div>
                <div className="h-full w-1/3 bg-[#EEB300]"></div>
                <div className="h-full w-1/3 bg-[#A82C51]"></div>
            </div>
        </footer> 
    );
}