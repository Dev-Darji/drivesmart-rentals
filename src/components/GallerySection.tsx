import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Happy customers with car" },
  { src: gallery2, alt: "Our car fleet" },
  { src: gallery3, alt: "Scenic road trip" },
  { src: gallery4, alt: "Professional drivers" },
];

const GallerySection = () => (
  <section id="gallery" className="py-16 lg:py-24 bg-background">
    <div className="container">
      <div className="text-center mb-12">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Gallery</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Our Journey in Pictures</h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div key={i} className="aspect-square rounded-xl overflow-hidden group">
            <img src={img.src} alt={img.alt} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
