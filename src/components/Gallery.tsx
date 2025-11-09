import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import tradingSetup from '@/assets/trading-setup.jpg';
import aboutPhoto from '@/assets/about-photo.jpg';
import lionelPhoto from '@/assets/lionel-kouakou.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const photos = [
    {
      src: aboutPhoto,
      title: 'Lionel Cameron - Trading Session',
      description: 'Session de trading en direct'
    },
    {
      src: lionelPhoto,
      title: 'Lionel Kouakou',
      description: 'Fondateur de l\'Institution'
    },
    {
      src: tradingSetup,
      title: 'Setup de Trading',
      description: 'Station de trading professionnelle'
    }
  ];

  const videos = [
    {
      thumbnail: tradingSetup,
      title: 'Introduction au Smart Money Concept',
      duration: '12:35',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      thumbnail: aboutPhoto,
      title: 'Témoignage d\'un Élève',
      duration: '8:20',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      thumbnail: lionelPhoto,
      title: 'Analyse de Marché Live',
      duration: '25:14',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  ];

  return (
    <section id="galerie" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            Galerie
            <span className="block text-gold mt-2">Photos & Vidéos</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez notre institution en images et nos sessions de formation
          </p>
        </div>

        {/* Photos Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-montserrat font-bold text-gold mb-8">Photos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(photo.src)}
                className="group relative rounded-xl overflow-hidden cursor-pointer border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-gold"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h4 className="text-white font-semibold text-lg mb-1">{photo.title}</h4>
                  <p className="text-gray-300 text-sm">{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Videos Section */}
        <div>
          <h3 className="text-3xl font-montserrat font-bold text-gold mb-8">Vidéos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div
                key={index}
                onClick={() => setSelectedVideo(video.videoUrl)}
                className="group relative rounded-xl overflow-hidden cursor-pointer border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-gold"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gold/90 rounded-full flex items-center justify-center group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h4 className="text-white font-semibold text-lg">{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 rounded-2xl p-8 md:p-12 border border-gold/30 text-center">
          <h3 className="text-3xl font-montserrat font-bold mb-4">
            Rejoignez nos formations
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Vivez l'expérience de formation qui transformera votre carrière de trader
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gold hover:bg-gold-light text-primary-foreground font-semibold text-lg px-12 shadow-gold"
          >
            <a
              href="https://wa.me/+2250777519477"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nous Contacter
            </a>
          </Button>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gold transition-colors"
            aria-label="Fermer"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Agrandir"
            className="max-w-full max-h-full object-contain animate-scale-in"
          />
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div
          onClick={() => setSelectedVideo(null)}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
        >
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 text-white hover:text-gold transition-colors z-10"
            aria-label="Fermer"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="w-full max-w-4xl aspect-video animate-scale-in">
            <iframe
              src={selectedVideo}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Vidéo"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
