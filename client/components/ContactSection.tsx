import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="w-full py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-card-foreground mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions about our products or orders? Contact us and we'll
              get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-card-foreground mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-card-foreground mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@college.edu"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-card-foreground mb-2"
                >
                  Message / Order Notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you're looking for or any special requests..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-card-foreground mb-6">
                Contact Information
              </h3>

              {/* Email */}
              <div className="flex gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-1">
                    Email
                  </h4>
                  <p className="text-muted-foreground">
                    orders@collegemerch.edu
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Response within 24 hours
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-1">
                    Phone
                  </h4>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">
                    Mon-Fri, 9am-6pm EST
                  </p>
                </div>
              </div>

              {/* Campus Pickup */}
              <div className="flex gap-4 mb-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-1">
                    Campus Pickup
                  </h4>
                  <p className="text-muted-foreground">
                    Student Center, Building A
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Available during business hours
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Info Box */}
            <div className="bg-secondary/50 rounded-xl p-6 border border-border">
              <h4 className="font-bold text-card-foreground mb-3">
                💡 Did you know?
              </h4>
              <p className="text-muted-foreground text-sm">
                Students can pick up orders directly from the campus store! No
                shipping costs and get your items instantly. Ask about bulk
                discounts for organizations and clubs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
