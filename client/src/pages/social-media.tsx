import { useEffect } from "react";
import { Instagram, Facebook, Phone, Mail } from "lucide-react";
import Navigation from "@/components/navigation";

export default function SocialMedia() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/back2healthug/",
      handle: "@back2healthug",
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:from-pink-600 hover:to-purple-700",
      bgColor: "bg-gradient-to-r from-pink-50 to-purple-50",
      borderColor: "border-pink-200",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/profile.php?id=61563604760779",
      handle: "Back 2 Health Uganda",
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-700 hover:to-blue-800",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
  ];

  const contactInfo = [
    {
      name: "Email",
      icon: Mail,
      value: "back2healthug@gmail.com",
      url: "mailto:back2healthug@gmail.com",
      color: "from-teal-500 to-teal-600",
      hoverColor: "hover:from-teal-600 hover:to-teal-700",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
    },
    {
      name: "Phone",
      icon: Phone,
      value: "+256 758 478992",
      url: "tel:+256758478992",
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-500">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Connect With Us
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90">
              Follow us on social media and stay updated with the latest health tips, news, and updates from Back 2 Health Uganda
            </p>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            
            {/* Social Media Links */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-center text-[hsl(var(--neutral-dark))] mb-8">
                Follow Us
              </h2>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-5 ${social.bgColor} border ${social.borderColor} rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group`}
                  >
                    <div className={`p-3 bg-gradient-to-r ${social.color} ${social.hoverColor} rounded-xl transition-all duration-300 group-hover:shadow-md`}>
                      <social.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[hsl(var(--neutral-dark))]">
                        {social.name}
                      </h3>
                      <p className="text-gray-600">{social.handle}</p>
                    </div>
                    <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-12">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="text-gray-500 font-medium">or</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-center text-[hsl(var(--neutral-dark))] mb-8">
                Get In Touch
              </h2>
              <div className="space-y-4">
                {contactInfo.map((contact) => (
                  <a
                    key={contact.name}
                    href={contact.url}
                    className={`flex items-center gap-4 p-5 ${contact.bgColor} border ${contact.borderColor} rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group`}
                  >
                    <div className={`p-3 bg-gradient-to-r ${contact.color} ${contact.hoverColor} rounded-xl transition-all duration-300 group-hover:shadow-md`}>
                      <contact.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[hsl(var(--neutral-dark))]">
                        {contact.name}
                      </h3>
                      <p className="text-gray-600">{contact.value}</p>
                    </div>
                    <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-[hsl(var(--neutral-dark))] mb-3">
                  Ready to Start Your Wellness Journey?
                </h3>
                <p className="text-gray-600 mb-6">
                  Book an appointment today and take the first step towards better health.
                </p>
                <a
                  href="/#appointment"
                  className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                >
                  Book Appointment
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
