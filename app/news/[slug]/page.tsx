    import Image from "next/image";

export default function NewsDetail() {
    return (
        <>
        <div className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <nav className="flex items-center text-xs text-gray-500 mb-6">
                    <a href="#" className="hover:underline hover:text-[#7e2069]">Home</a>
                    <i data-lucide="chevron-right" className="w-3 h-3 mx-2 text-gray-400"></i>
                    <a href="#" className="hover:underline hover:text-[#7e2069]">Media and news</a>
                    <i data-lucide="chevron-right" className="w-3 h-3 mx-2 text-gray-400"></i>
                    <span className="text-gray-900 font-medium">Remote school's remarkable talent for art</span>
                </nav>

                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wide mb-4">
                        Student Success
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#2c1b4e] leading-[1.1] mb-6">
                        Remote school's remarkable talent for art showcased on national stage
                    </h1>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-600 border-l-2 border-[#FFC627] pl-4">
                        <div className="flex items-center gap-2">
                            <i data-lucide="calendar" className="w-4 h-4 text-gray-400"></i>
                            <span>Published: 12 January 2025</span>
                        </div>
                        <span className="hidden sm:inline text-gray-300">|</span>
                        <div className="flex items-center gap-2">
                            <i data-lucide="clock" className="w-4 h-4 text-gray-400"></i>
                            <span>3 min read</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                <article className="lg:col-span-8">
                    <figure className="mb-10 rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-gray-100">
                        <Image
                            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
                            alt="Students learning together in classroom"
                            width={500}
                            height={500}
                            className="w-full h-auto object-cover max-h-[500px]"
                        />
                        <figcaption className="p-3 text-xs text-gray-500 bg-gray-50 border-t border-gray-100 italic flex gap-2">
                            <i data-lucide="camera" className="w-3 h-3 mt-0.5"></i>
                            Students from Fitzroy Valley District High School working on their award-winning mural project.
                        </figcaption>
                    </figure>

                    <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                        <p className="text-xl md:text-2xl leading-relaxed font-light text-gray-800">
                            Fitzroy Valley District High School left its mark on the national arts stage in 2025, with students earning top honors for a collaborative mural that celebrates the rich cultural history of the Kimberley region.
                        </p>
                    </div>

                    <div className="space-y-6 text-gray-800 leading-7 text-base md:text-lg">
                        <p>
                            The remote school, located approximately 400 kilometers east of Broome, has become a beacon of creativity. Despite the logistical challenges of its location, the student art program has flourished under the guidance of dedicated local artists and teachers.
                        </p>
                        <p>
                            Principal Sarah Jenkins said the recognition was a testament to the students' dedication and the deep connection they have to their country.
                        </p>

                        <div className="my-10 pl-6 border-l-4 border-[#FFC627] py-2 bg-gradient-to-r from-yellow-50/50 to-transparent">
                            <p className="text-xl italic font-medium text-[#2c1b4e] mb-2">
                                "Art is more than just a subject here; it is a way for our students to tell their stories, preserve their language, and share their unique perspective with the world."
                            </p>
                            <span className="text-sm font-bold text-gray-900 uppercase tracking-wide">— Sarah Jenkins, Principal</span>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 tracking-tight">Connecting community through colour</h2>
                        <p>
                            The winning piece, titled <em>"Winds of the Valley"</em>, depicts the seasonal changes of the Fitzroy River. Over 40 students from Years 7 to 10 contributed to the artwork over a period of three months. The project involved:
                        </p>
                        <ul className="space-y-3 my-6 pl-2">
                            <li className="flex items-start gap-3">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#9e1b66] shrink-0"></div>
                                <span>Workshops with local Bunuba elders to understand the traditional stories of the river.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#9e1b66] shrink-0"></div>
                                <span>Sketching excursions to the riverbanks to capture the changing light and flora.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#9e1b66] shrink-0"></div>
                                <span>Using ochre collected from the land mixed with modern acrylics.</span>
                            </li>
                        </ul>

                        <div className="grid md:grid-cols-2 gap-4 my-8">
                            
                            <Image 
                                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&amp;w=800&amp;auto=format&amp;fit=crop" 
                                className="rounded-lg border border-gray-100 shadow-sm h-64 w-full object-cover" 
                                alt="Art supplies" 
                                width={500}
                                height={500}
                            />
                            <Image 
                                src="https://images.unsplash.com/photo-1596464716127-f9a86b5b3b4f?q=80&amp;w=800&amp;auto=format&amp;fit=crop" 
                                className="rounded-lg border border-gray-100 shadow-sm h-64 w-full object-cover"
                                alt="Student painting" 
                                width={500}
                                height={500}
                            />
                        </div>

                        <p>
                            The artwork will now be displayed at the National Gallery in Canberra for six weeks before returning to the school's new performing arts centre.
                        </p>
                        <p>
                            "This achievement puts our small community on the map," said Year 10 student and lead artist, Marcus. "It shows that it doesn't matter where you come from, your voice and your art matter."
                        </p>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Topics</h4>
                        <div className="flex flex-wrap gap-2">
                            <a href="#" className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors">Arts</a>
                            <a href="#" className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors">Regional Education</a>
                            <a href="#" className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors">Aboriginal Education</a>
                            <a href="#" className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors">Student Success</a>
                        </div>
                    </div>

                    <div className="mt-8 flex items-center gap-4">
                        <span className="text-sm font-medium text-gray-900">Share this story:</span>
                        <div className="flex gap-2">
                            <button className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                                <i data-lucide="facebook" className="w-4 h-4"></i>
                            </button>
                            <button className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors">
                                <i data-lucide="twitter" className="w-4 h-4"></i>
                            </button>
                            <button className="w-8 h-8 rounded-full bg-blue-800 text-white flex items-center justify-center hover:bg-blue-900 transition-colors">
                                <i data-lucide="linkedin" className="w-4 h-4"></i>
                            </button>
                            <button className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center hover:bg-gray-300 transition-colors">
                                <i data-lucide="link" className="w-4 h-4"></i>
                            </button>
                        </div>
                    </div>
                </article>

                <aside className="lg:col-span-4 space-y-8">
                    
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <i data-lucide="newspaper" className="w-5 h-5 text-[#9e1b66]"></i> Media contact
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                            For media enquiries regarding this story or the Department of Education:
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 text-sm">
                                <i data-lucide="phone" className="w-4 h-4 text-gray-400 mt-1"></i>
                                <div>
                                    <span className="block font-medium text-gray-900">Media line</span>
                                    <a href="tel:0892644111" className="text-[#7e2069] hover:underline">(08) 9264 4111</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 text-sm">
                                <i data-lucide="mail" className="w-4 h-4 text-gray-400 mt-1"></i>
                                <div>
                                    <span className="block font-medium text-gray-900">Email us</span>
                                    <a href="mailto:media@education.wa.edu.au" className="text-[#7e2069] hover:underline break-all">media@education.wa.edu.au</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-900 mb-4 text-lg">Related stories</h3>
                        <div className="space-y-4">
                            <a href="#" className="group block bg-white border border-gray-100 rounded-lg p-4 hover:shadow-md transition-all">
                                <div className="flex gap-4">
                                    <div className="w-20 h-20 shrink-0 bg-blue-100 rounded-md overflow-hidden">
                                        <Image 
                                            alt="image" 
                                            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&amp;w=200&amp;auto=format&amp;fit=crop" 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                                            width={500}
                                            height={500}
                                        />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wide">Music</span>
                                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#9e1b66] transition-colors line-clamp-2 mt-1">Singing superstars: WA Opera partnership</h4>
                                        <p className="text-xs text-gray-500 mt-2">8 Jan 2025</p>
                                    </div>
                                </div>
                            </a>

                            <a href="#" className="group block bg-white border border-gray-100 rounded-lg p-4 hover:shadow-md transition-all">
                                <div className="flex gap-4">
                                    <div className="w-20 h-20 shrink-0 bg-orange-100 rounded-md overflow-hidden">
                                        <Image 
                                            alt="image" 
                                            src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&amp;w=200&amp;auto=format&amp;fit=crop" 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                                            width={500}
                                            height={500}
                                        />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wide">Grants</span>
                                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#9e1b66] transition-colors line-clamp-2 mt-1">Secondary Assistance Scheme applications open</h4>
                                        <p className="text-xs text-gray-500 mt-2">5 Jan 2025</p>
                                    </div>
                                </div>
                            </a>

                            <a href="#" className="group block bg-white border border-gray-100 rounded-lg p-4 hover:shadow-md transition-all">
                                <div className="flex gap-4">
                                    <div className="w-20 h-20 shrink-0 bg-purple-100 rounded-md overflow-hidden">
                                        <Image 
                                            alt="image" 
                                            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&amp;w=200&amp;auto=format&amp;fit=crop" 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                                            width={500}
                                            height={500}
                                        />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold text-purple-600 uppercase tracking-wide">Wellbeing</span>
                                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#9e1b66] transition-colors line-clamp-2 mt-1">Creating calm at Harrisdale Primary School</h4>
                                        <p className="text-xs text-gray-500 mt-2">15 Dec 2024</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="mt-4">
                            <a href="#" className="inline-flex items-center text-sm font-medium text-[#7e2069] hover:underline">
                                View all news <i data-lucide="arrow-right" className="w-4 h-4 ml-1"></i>
                            </a>
                        </div>
                    </div>

                    <div className="bg-[#2c1b4e] rounded-lg p-6 text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFC627] rounded-full blur-2xl opacity-20 -mr-10 -mt-10"></div>
                        
                        <h3 className="font-bold text-lg mb-2 relative z-10">Stay updated</h3>
                        <p className="text-sm text-gray-300 mb-4 leading-relaxed relative z-10">Get the latest education news and stories delivered straight to your inbox.</p>
                        
                        <form className="flex flex-col gap-2 relative z-10">
                            <input type="email" placeholder="Email address" className="w-full px-3 py-2 rounded-sm text-gray-900 text-sm focus:outline-none border-2 border-transparent focus:border-[#FFC627]" />
                            <button type="submit" className="bg-[#FFC627] text-black font-semibold text-sm py-2 rounded-sm hover:bg-[#ffcf4d] transition-colors">Subscribe</button>
                        </form>
                    </div>

                </aside>
            </div>
        </div>
        </>
    )
}