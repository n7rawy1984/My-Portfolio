import { useEffect, useState } from 'react';
import {
  ArrowDown,
  Mail,
  MapPin,
  Phone,
  Thermometer,
  Car,
  Wrench,
  ToyBrick
} from 'lucide-react';
import heroImage from '@/assets/hero-portrait.jpg';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setShowProjects(false);
      setClosing(false);
    }, 400);
  };

  const projects = [
    {
      title: 'Hit&Get',
      url: 'https://hit2get.vercel.app/',
      desc: 'Landing page for a car cooler/heater product in UAE',
      icon: Thermometer
    },
    {
      title: 'Al Saeed Prestige',
      url: 'https://alsaeed-prestige-website.vercel.app/',
      desc: 'Luxury tire brand site with product highlights',
      icon: Car
    },
    {
      title: 'Deal Station UAE',
      url: 'https://deal-station-uae.vercel.app/',
      desc: 'Emergency multi-tool landing page with order form',
      icon: Wrench
    },
    {
      title: 'Nagham Land',
      url: 'https://nagham.vercel.app/cart',
      desc: 'Playful e-commerce site for kids’ products',
      icon: ToyBrick
    }
  ];

  return (
    <>
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-20" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="space-y-4">
                <h1 className="font-display text-5xl lg:text-7xl font-bold">
                  <span className="gradient-text">MOHAMED</span>
                  <br />
                  <span className="text-foreground">ELNAHRAWY</span>
                </h1>
                <div className="h-1 w-32 bg-gradient-primary rounded-full" />
                <p className="text-xl lg:text-2xl text-muted-foreground font-light">
                  Accounting Expert <span className="text-primary">×</span> Digital Innovator
                  <br />
                  <span className="text-primary font-semibold">15+ Years</span> of Excellence
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Transforming businesses through financial expertise and cutting-edge technology.
                  Specialized in GCC compliance, process optimization, and digital transformation.
                </p>

                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    n7rawy1984@gmail.com
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    +971 588079593
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Dubai, UAE
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setShowProjects(true)}
                  className="px-8 py-4 font-semibold text-primary border-2 border-primary/30 rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  View Projects
                </button>
              </div>
            </div>

            {/* Image */}
            <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-glow rounded-3xl blur-3xl opacity-60" />
                <div className="relative glass-card rounded-3xl overflow-hidden p-4">
                  <img
                    src={heroImage}
                    alt="Mohamed Elnahrawy - Professional Portrait"
                    className="w-full h-[600px] object-cover rounded-2xl"
                  />
                  <div className="absolute bottom-8 left-8 right-8 glass-card rounded-xl p-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">15+</div>
                        <div className="text-xs text-muted-foreground">Years Experience</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-secondary">45%</div>
                        <div className="text-xs text-muted-foreground">Efficiency Increase</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-success">35%</div>
                        <div className="text-xs text-muted-foreground">Cost Reduction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </section>

      {/* Popup Modal */}
      {showProjects && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-lg overflow-y-auto px-4 py-8">
          <div
            className={`glass-card max-w-4xl w-full mx-auto p-6 rounded-2xl relative transition-all duration-400 ${
              closing ? 'opacity-0 scale-95' : 'animate-fade-in-up'
            }`}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition text-xl"
            >
              ✕
            </button>

            <h2 className="text-3xl font-display font-bold mb-6 gradient-text text-center">
              Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <div key={index} className="achievement-card">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{project.desc}</p>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 text-sm font-medium text-primary border border-primary/30 rounded hover:bg-primary/10 transition"
                    >
                      Visit Site
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
