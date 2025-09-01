import { useEffect, useRef, useState } from 'react';
import { BarChart3, Brain, Globe, Settings, TrendingUp, Zap } from 'lucide-react';

const skillCategories = [
  {
    title: "Technical Skills",
    icon: Settings,
    color: "primary",
    skills: [
      { name: "Financial Reporting & Analysis", level: 95 },
      { name: "ERP Systems & Microsoft Dynamics", level: 90 },
      { name: "Data Analysis & Visualization", level: 85 },
      { name: "Inventory Management Systems", level: 92 },
      { name: "ICDL Certified", level: 88 }
    ]
  },
  {
    title: "Management Skills", 
    icon: TrendingUp,
    color: "secondary",
    skills: [
      { name: "Operations Management", level: 95 },
      { name: "Team Leadership", level: 90 },
      { name: "Process Optimization", level: 93 },
      { name: "Cross-cultural Coordination", level: 88 },
      { name: "Vendor Relations", level: 85 }
    ]
  },
  {
    title: "Digital Skills",
    icon: Zap,
    color: "success",
    skills: [
      { name: "AI Tools & Automation", level: 85 },
      { name: "Social Media Marketing", level: 80 },
      { name: "Digital Advertising", level: 75 },
      { name: "Content Creation", level: 78 },
      { name: "Web Development (Learning)", level: 70 }
    ]
  },
  {
    title: "Regional Expertise",
    icon: Globe,
    color: "warning",
    skills: [
      { name: "GCC Compliance", level: 95 },
      { name: "UAE VAT Regulations", level: 90 },
      { name: "International Standards", level: 88 },
      { name: "Bilingual Documentation", level: 95 },
      { name: "Arabic & English Fluency", level: 98 }
    ]
  }
];

const colorMap = {
  primary: "bg-primary",
  secondary: "bg-secondary", 
  success: "bg-success",
  warning: "bg-warning"
};

export const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars with staggered delays
          setTimeout(() => {
            skillCategories.forEach((category, categoryIndex) => {
              category.skills.forEach((skill, skillIndex) => {
                setTimeout(() => {
                  setAnimatedSkills(prev => new Set([...prev, `${categoryIndex}-${skillIndex}`]));
                }, (categoryIndex * 200) + (skillIndex * 100));
              });
            });
          }, 500);
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
        
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set combining traditional finance expertise with modern digital capabilities
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={categoryIndex}
                className={`glass-card rounded-2xl p-8 hover:shadow-elevated transition-all duration-500 group ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorMap[category.color as keyof typeof colorMap]} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const skillKey = `${categoryIndex}-${skillIndex}`;
                    const isAnimated = animatedSkills.has(skillKey);
                    
                    return (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground font-mono">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Skill Bar */}
                        <div className="skill-bar">
                          <div
                            className={`skill-progress ${colorMap[category.color as keyof typeof colorMap]}`}
                            style={{
                              width: isAnimated ? `${skill.level}%` : '0%',
                              background: category.color === 'primary' ? 'var(--gradient-primary)' :
                                         category.color === 'secondary' ? 'var(--gradient-primary)' :
                                         category.color === 'success' ? 'linear-gradient(90deg, hsl(var(--success)), hsl(var(--success-glow)))' :
                                         'linear-gradient(90deg, hsl(var(--warning)), hsl(var(--warning)))'
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Summary */}
        <div className={`mt-16 grid md:grid-cols-3 gap-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          
          <div className="text-center glass-card rounded-xl p-6 hover:shadow-elevated transition-all duration-300 group">
            <Brain className="w-12 h-12 text-primary mx-auto mb-4 group-hover:animate-pulse" />
            <h4 className="font-display text-xl font-bold mb-2">AI Integration</h4>
            <p className="text-muted-foreground text-sm">
              Successfully integrated AI tools for financial analysis and business automation
            </p>
          </div>

          <div className="text-center glass-card rounded-xl p-6 hover:shadow-elevated transition-all duration-300 group">
            <BarChart3 className="w-12 h-12 text-secondary mx-auto mb-4 group-hover:animate-pulse" />
            <h4 className="font-display text-xl font-bold mb-2">Data Analytics</h4>
            <p className="text-muted-foreground text-sm">
              Advanced data visualization and analysis capabilities for strategic decision making
            </p>
          </div>

          <div className="text-center glass-card rounded-xl p-6 hover:shadow-elevated transition-all duration-300 group">
            <Globe className="w-12 h-12 text-success mx-auto mb-4 group-hover:animate-pulse" />
            <h4 className="font-display text-xl font-bold mb-2">Global Perspective</h4>
            <p className="text-muted-foreground text-sm">
              Extensive experience across multiple countries with deep cultural understanding
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};