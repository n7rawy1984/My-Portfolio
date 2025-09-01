import { useEffect, useRef, useState } from 'react';
import { Building, Calendar, MapPin, TrendingUp } from 'lucide-react';

const experiences = [
  {
    title: "Freelance Accounting & Business Consultant",
    company: "Self-Employed",
    location: "Alexandria, Egypt",
    period: "2024 - Present",
    type: "Current",
    achievements: [
      "Provided accounting services to Egyptian SMEs",
      "Implemented cost-saving measures averaging 15-20% reduction",
      "Developed tailored financial reporting systems",
      "Offered business advisory services"
    ]
  },
  {
    title: "Online Sales Manager & Warehouse Manager",
    company: "Al Nahda Company",
    location: "Alexandria, Egypt", 
    period: "2022 - 2024",
    type: "Recent",
    achievements: [
      "Reduced stock discrepancies by 45% with inventory management system",
      "Managed export documentation for international shipments",
      "Increased online sales by 35% through social media strategy",
      "Coordinated with suppliers for timely deliveries"
    ]
  },
  {
    title: "Warehouse and Logistics Manager",
    company: "Alexandria Port",
    location: "Alexandria, Egypt",
    period: "2021 - 2022",
    type: "Previous",
    achievements: [
      "Supervised logistics operations for import/export activities",
      "Reduced shipping delays by 35% through process optimization",
      "Implemented bilingual inventory tracking system",
      "Utilized data analysis tools for demand forecasting"
    ]
  },
  {
    title: "Personnel Affairs and Recruitment Officer",
    company: "Al-Qafei Recruitment Company",
    location: "Kingdom of Saudi Arabia",
    period: "2019 - 2020",
    type: "Previous",
    achievements: [
      "Managed recruitment processes for regional markets",
      "Handled employee documentation compliant with labor laws",
      "Coordinated visa processing for international positions",
      "Implemented efficient candidate screening system"
    ]
  },
  {
    title: "Accountant & Store Keeper",
    company: "Al-Helal Company for Medical Supplies",
    location: "Alexandria, Egypt",
    period: "2016 - 2018",
    type: "Previous",
    achievements: [
      "Managed inventory for medical equipment",
      "Implemented accounting system for regional compliance",
      "Prepared financial reports meeting international standards",
      "Managed company's digital presence and brand awareness"
    ]
  },
  {
    title: "Accountant & Data Entry Operator",
    company: "Ansar Group",
    location: "Dubai, UAE",
    period: "2013 - 2015",
    type: "Previous",
    achievements: [
      "Managed barcode system operations for trading company",
      "Reduced inventory discrepancies by 30% through systematic tracking",
      "Processed purchase orders and sales invoices",
      "Implemented bilingual reporting for government compliance"
    ]
  }
];

const typeColors = {
  Current: "text-success border-success/30 bg-success/10",
  Recent: "text-primary border-primary/30 bg-primary/10", 
  Previous: "text-secondary border-secondary/30 bg-secondary/10"
};

export const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            15+ years of progressive experience across accounting, operations, and digital transformation
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/30" />
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row lg:items-center ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                
                {/* Timeline marker */}
                <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-8 h-8 bg-gradient-primary rounded-full border-4 border-background flex items-center justify-center">
                  <Building className="w-4 h-4 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className={`ml-16 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <div className="glass-card p-8 rounded-2xl hover:shadow-elevated transition-all duration-500 group hover:-translate-y-2">
                    
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between mb-4 gap-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <Building className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${typeColors[exp.type as keyof typeof typeColors]}`}>
                        {exp.type}
                      </span>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-primary" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-primary" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-success" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="group-hover:text-foreground transition-colors">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};