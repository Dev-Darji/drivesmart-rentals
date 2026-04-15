import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => (
  <section id="contact" className="py-16 lg:py-24 bg-background">
    <div className="container">
      <div className="text-center mb-12">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Get In Touch</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-foreground">Address</h3>
              <p className="text-muted-foreground text-sm">123 Ring Road, Satellite Area, Ahmedabad, Gujarat 380015</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-foreground">Phone</h3>
              <p className="text-muted-foreground text-sm">Mobile: +91 98765 43210</p>
              <p className="text-muted-foreground text-sm">Landline: 079-2345-6789</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-foreground">Email</h3>
              <p className="text-muted-foreground text-sm">info@jayjogmaya.in</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-foreground">Working Hours</h3>
              <p className="text-muted-foreground text-sm">Monday – Sunday: 24 Hours</p>
              <p className="text-muted-foreground text-sm">365 Days Available</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a href="tel:+919876543210">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <Phone className="w-4 h-4" /> Call Now
              </Button>
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[hsl(142,70%,40%)] text-primary-foreground hover:bg-[hsl(142,70%,35%)] gap-2">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </Button>
            </a>
            <a href="https://maps.google.com/?q=Ahmedabad+Gujarat" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <Navigation className="w-4 h-4" /> Get Directions
              </Button>
            </a>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-card h-[400px]">
          <iframe
            title="Jay Jogmaya Travels Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.7091440647!2d72.43965534803588!3d23.020158890898498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
