import React from "react";
import { Mail, Phone, Send, MapPin, Globe, Clock, Linkedin, Github } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { toast } = useToast();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "d0d041f1-8e99-4f2b-b130-ceaaae66002f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
          variant: "default"
        });
        (event.target as HTMLFormElement).reset();
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat about technology and innovation.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Details</h3>
              <div className="space-y-8">
                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 bg-purple-500/10 rounded-full flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                    <Mail className="w-7 h-7 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-lg">Email</p>
                    <a href="mailto:abujuniorv@gmail.com" className="text-white text-lg hover:text-purple-400 transition-colors">
                      abujuniorv@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 bg-purple-500/10 rounded-full flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                    <Phone className="w-7 h-7 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-lg">Phone</p>
                    <a href="tel:+23273914398" className="text-white text-lg hover:text-purple-400 transition-colors">
                      +232 (73) 914398
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 bg-purple-500/10 rounded-full flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                    <MapPin className="w-7 h-7 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-lg">Location</p>
                    <p className="text-white text-lg">Freetown, Sierra Leone</p>
                    <p className="text-gray-400 text-sm">West Africa</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Contact Info */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Additional Info</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                    <Globe className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">Time Zone</p>
                    <p className="text-white">GMT (UTC+0)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                    <Clock className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">Availability</p>
                    <p className="text-white">Mon - Fri, 9AM - 5PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="http://linkedin.com/in/abu-jr-vandi-67b12425a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center hover:bg-purple-500/20 transition-colors group"
                >
                  <Linkedin className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
                </a>
                <a
                  href="https://github.com/AbuJrVandi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center hover:bg-purple-500/20 transition-colors group"
                >
                  <Github className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10 h-full">
              <form onSubmit={onSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-gray-300 mb-3">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-14 text-lg"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-3">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-14 text-lg"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-gray-300 mb-3">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Your message"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 min-h-[200px] text-lg resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 h-14 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
