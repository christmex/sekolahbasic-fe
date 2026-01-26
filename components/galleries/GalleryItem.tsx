import { GalleryItem as GalleryItemType } from "@/types/gallery";
import Image from "next/image";
import Link from "next/link";

type Props = {
  item: GalleryItemType;
};

export function GalleryItem({ item }: Props) {
  // Ambil URL gambar pertama, kalo gak ada kasih placeholder
  const firstImage = item.images.length > 0 
    ? item.images[0].url 
    : "/images/placeholder.jpg";

  return (
    <Link href={`/gallery/${item.slug}`} className="group block relative cursor-pointer"> 
      <div className="relative w-full aspect-4/3 perspective-1000">
        {/* Background Stack Layer */} 
        <div className="absolute inset-0 bg-gray-100 rounded-xl transform translate-x-2 -translate-y-2 rotate-3 transition-transform duration-300 group-hover:translate-x-3 group-hover:rotate-6 border border-gray-200"></div> 
        {/* Main Image Card */} 
        <div className="relative w-full h-full rounded-xl overflow-hidden border border-gray-200 bg-white transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg"> 
        <Image
            src={firstImage}
            alt={item.name} 
            fill
            unoptimized={process.env.NODE_ENV === 'development'}
            className="w-full h-full object-cover" 
          /> 
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-80"></div> 
          <div className="absolute bottom-4 left-4 right-4 text-white"> 
            <div className="flex items-center gap-2 mb-2">
              {/* <span className="text-[10px] font-bold uppercase tracking-wider bg-[#FFC627] text-black px-1.5 py-0.5 rounded-sm">Event</span> */}
              <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/20 px-1.5 py-0.5 rounded-sm">{item.category.name}</span>
            </div> 
            <h3 className="font-medium text-sm leading-tight">{item.name}</h3> 
          </div> 
        </div> 
      </div>  
    </Link> 
  );
}