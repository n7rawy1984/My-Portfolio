import { useEffect, useState } from 'react';
import { ArrowDown, Download, Mail, MapPin, Phone } from 'lucide-react';
import heroImage from '@/assets/hero-portrait.jpg';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20" />
      
      {/* Main Content */}
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
              
              {/* Contact Info */}
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

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="hero-button group">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download CV
              </button>
              
              <button className="px-8 py-4 font-semibold text-primary border-2 border-primary/30 rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300">
                View Projects
              </button>
            </div>
          </div>

          {/* Image */}
          <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative">
              {/* Glowing backdrop */}
              <div className="absolute inset-0 bg-gradient-glow rounded-3xl blur-3xl opacity-60" />
              
              {/* Main image container */}
              <div className="relative glass-card rounded-3xl overflow-hidden p-4">
                <img 
                  src={heroImage}
                  alt="Mohamed Elnahrawy - Professional Portrait"
                  className="w-full h-[600px] object-cover rounded-2xl"
                />
                
                {/* Overlay stats */}
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

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};