"use client"

import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplitStacked from '@/components/sections/hero/HeroSplitStacked';
import SplitAboutMetric from '@/components/sections/about/SplitAboutMetric';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Calendar, Camera, HelpCircle, Instagram, Facebook, Twitter, Linkedin, Sparkles, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="small"
      sizing="medium"
      background="animatedAurora"
      cardStyle="glass-elevated"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="minimal"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Studio"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroSplitStacked
          title="Capture Your Moments"
          description="Professional photography studio specializing in portraits, events, and product photography. We bring your vision to life through creative storytelling and technical excellence."
          tag="Photography Studio"
          tagIcon={Camera}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764846416488-hw4nck7s.jpg",
              imageAlt: "Professional portrait photography"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764846417639-sxu1jlx1.jpg",
              imageAlt: "Wedding photography moment"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764846418919-87r37sme.jpg",
              imageAlt: "Product photography lighting"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764846420010-zlj6v0i3.jpg",
              imageAlt: "Fashion photography session"
            }
          ]}
          stackedVariant="card"
          imagePosition="right"
          buttons={[
            {
              text: "View Portfolio",
              href: "#portfolio"
            },
            {
              text: "Get in Touch",
              href: "#contact"
            }
          ]}
        />
      </div>
      
      <div id="about" data-section="about">
        <SplitAboutMetric
          title="About Our Studio"
          description={[
            "With over a decade of experience, our studio has established itself as a trusted partner for capturing life's most precious moments. We combine technical expertise with artistic vision to deliver exceptional photography that tells your unique story. Our team of dedicated photographers is passionate about creating images that resonate and endure."
          ]}
          metrics={[
            {
              label: "Years of Experience",
              value: "12+"
            },
            {
              label: "Happy Clients",
              value: "800+"
            }
          ]}
        />
      </div>
      
      <div id="services" data-section="services">
        <FeatureCardSix
          title="Our Process"
          description="We follow a carefully crafted process to ensure every shoot captures exactly what you envision. From initial consultation to final delivery, we handle every detail with precision."
          tag="Photography Services"
          tagIcon={Sparkles}
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "Initial Consultation",
              description: "We meet with you to understand your vision, preferences, and goals for your photo session.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764846421211-cbdgt04g.jpg"
            },
            {
              id: 2,
              title: "Professional Shoot",
              description: "Using state-of-the-art equipment and lighting, we capture stunning images in optimal conditions.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764846422708-o0tgqa3g.jpg"
            },
            {
              id: 3,
              title: "Editing & Enhancement",
              description: "Each image is carefully edited and enhanced to bring out the best while maintaining natural beauty.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764846424063-bphxuo8s.jpg"
            },
            {
              id: 4,
              title: "Delivery & Prints",
              description: "We provide high-resolution digital files and premium print options for your collection.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764846425576-jihuy5e6.jpg"
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Real feedback from the amazing people we've had the privilege to work with"
          tag="Client Reviews"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Bride",
              company: "Wedding Client",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764846426805-om44r292.jpg",
              imageAlt: "Happy bride portrait"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "CEO",
              company: "Tech Startup",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764846428356-zkm1vl6z.jpg",
              imageAlt: "Professional headshot"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Event Planner",
              company: "Elite Events",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764846429620-mdgxqlxu.jpg",
              imageAlt: "Wedding photography moment"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Family",
              company: "Portrait Client",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764846430867-vygik46d.jpg",
              imageAlt: "Family portrait session"
            },
            {
              id: "5",
              name: "Jessica Taylor",
              role: "Entrepreneur",
              company: "Business Owner",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764846431932-ydhndpts.jpg",
              imageAlt: "Engagement photo"
            },
            {
              id: "6",
              name: "Amanda Brooks",
              role: "Marketing Director",
              company: "Creative Agency",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764846433111-hnq757dz.jpg",
              imageAlt: "Professional business portrait"
            }
          ]}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about booking and working with our studio"
          tag="Help & Support"
          tagIcon={HelpCircle}
          textboxLayout="default"
          mediaPosition="left"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764846434288-nlokuakx.jpg"
          imageAlt="Photography studio interior"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How far in advance should I book?",
              content: "We recommend booking 2-3 months in advance for wedding photography and 2-4 weeks for other sessions. However, we do accept last-minute bookings based on availability."
            },
            {
              id: "2",
              title: "What is your pricing structure?",
              content: "Our pricing varies based on the type of photography, session duration, and package selected. Contact us for a customized quote tailored to your specific needs."
            },
            {
              id: "3",
              title: "Do you offer retouching services?",
              content: "Yes, basic retouching is included with all packages. We also offer premium retouching and printing services for additional fees."
            },
            {
              id: "4",
              title: "What is your cancellation policy?",
              content: "Cancellations made 30 days in advance receive a full refund. Cancellations within 30 days are subject to a 50% fee. No refunds for cancellations within 7 days."
            },
            {
              id: "5",
              title: "Can I get digital and print copies?",
              content: "Absolutely! All packages include high-resolution digital files. We also offer premium printing options on various materials and sizes."
            },
            {
              id: "6",
              title: "Do you offer destination photography?",
              content: "Yes, we love traveling! We offer destination photography services with additional travel fees. Contact us to discuss your specific location."
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          title="Ready to Book Your Session?"
          description="Join hundreds of satisfied clients who have trusted us with their most cherished memories. Let's create something beautiful together."
          tagIcon={Calendar}
          inputPlaceholder="your@email.com"
          buttonText="Book Consultation"
          termsText="We respect your privacy. We'll only contact you about your booking."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Studio"
          copyrightText="© Studio, Inc. 2025. All rights reserved."
          columns={[
            {
              title: "Studio",
              items: [
                {
                  label: "About Us",
                  href: "#about"
                },
                {
                  label: "Services",
                  href: "#services"
                },
                {
                  label: "Portfolio",
                  href: "#portfolio"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "FAQ",
                  href: "#faq"
                },
                {
                  label: "Contact",
                  href: "#contact"
                },
                {
                  label: "Book Now",
                  href: "#contact"
                }
              ]
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Privacy Policy",
                  href: "/privacy"
                },
                {
                  label: "Terms & Conditions",
                  href: "/terms"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com",
              ariaLabel: "Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com",
              ariaLabel: "Twitter"
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com",
              ariaLabel: "LinkedIn"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}