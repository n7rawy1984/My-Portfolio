import { useEffect, useRef, useState } from 'react';
import { Award, Globe, Users, TrendingUp } from 'lucide-react';

const achievements = [
  {
    icon: TrendingUp,
    title: "Process Optimization",
    description: "Reduced monthly closing time by 40% through workflow improvements",
    stat: "40%"
  },
  {
    icon: Award,
    title: "Digital Transformation",
    description: "Led migration to automated systems for multiple companies",
    stat: "15+"
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Managed cross-cultural teams across GCC regions",
    stat: "10+"
  },
  {
    icon: Globe,
    title: "International Compliance",
    description: "Expert in GCC regulations and international standards",
    stat: "5+"
  }
];

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="space-y-6">
              <h2 className="font-display text-4xl lg:text-5xl font-bold">
                About <span className="gradient-text">Mohamed</span>
              </h2>
              
              <div className="h-1 w-24 bg-gradient-primary rounded-full" />
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  A results-driven professional with <span className="text-primary font-semibold">15+ years</span> of 
                  experience bridging the gap between traditional finance and modern technology. 
                </p>
                
                <p>
                  Specialized in <span className="text-secondary font-semibold">GCC compliance</span>, 
                  operations management, and digital transformation. Fluent in both 
                  <span className="text-primary"> English and Arabic</span>, with proven ability to 
                  optimize processes and drive business improvements across multicultural environments.
                </p>
                
                <p>
                  Currently expanding capabilities into <span className="text-success font-semibold">
                  data analysis and web development</span>, combining traditional business acumen 
                  with cutting-edge digital skills.
                </p>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-4 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <div className="text-3xl font-bold text-secondary mb-2">6+</div>
                <div className="text-sm text-muted-foreground">Countries Worked</div>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <div className="text-3xl font-bold text-success mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <div className="text-3xl font-bold text-warning mb-2">B.Com</div>
                <div className="text-sm text-muted-foreground">Accounting Degree</div>
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className={`space-y-6 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <h3 className="font-display text-2xl font-bold text-center mb-8">Key Achievements</h3>
            
            <div className="grid gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className="achievement-card group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                          <span className="text-2xl font-bold text-primary">{achievement.stat}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};