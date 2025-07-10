import React, { useEffect, useState } from 'react';
import { Heart, Calendar, MapPin, Clock, Users, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import weddingBg from '@/assets/wedding-floral-bg.jpg';

const WeddingInvitation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Create floating hearts
    const heartArray = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8
    }));
    setHearts(heartArray);
  }, []);

  const weddingDate = new Date('2024-12-15');
  const formattedDate = weddingDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Floating Hearts */}
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="heart-particle"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            fontSize: Math.random() * 10 + 10 + 'px'
          }}
        />
      ))}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${weddingBg})` }}
        />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="mb-8">
              <p className="text-lg md:text-xl text-muted-foreground mb-4 font-light">
                Together with our families
              </p>
              <h1 className="script-heading text-6xl md:text-8xl font-bold mb-4 animate-romantic-pulse">
                Sarah & Michael
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Request the pleasure of your company
              </p>
            </div>

            <div className="wedding-card max-w-2xl mx-auto mb-8">
              <div className="text-center">
                <h2 className="script-heading text-3xl md:text-4xl mb-6 text-primary">
                  Save the Date
                </h2>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                  <p className="text-xl md:text-2xl font-medium">{formattedDate}</p>
                </div>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <p className="text-lg">4:00 PM</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <p className="text-lg">The Garden Estate, Beverly Hills</p>
                </div>
              </div>
            </div>

            <Button className="romantic-button text-lg px-8 py-4 animate-heart-beat">
              <Heart className="w-5 h-5 mr-2 fill-current" />
              RSVP Now
            </Button>
          </div>
        </div>
      </section>

      {/* Wedding Details Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="script-heading text-4xl md:text-5xl text-center mb-16 text-primary animate-fade-in-up">
            Celebration Details
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Ceremony */}
            <Card className="wedding-card text-center">
              <div className="mb-6">
                <Heart className="w-12 h-12 mx-auto text-primary animate-float" />
              </div>
              <h3 className="script-heading text-2xl mb-4 text-primary">Ceremony</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" />
                  4:00 PM
                </p>
                <p className="flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Garden Pavilion
                </p>
                <p className="mt-4 text-sm">
                  Join us as we exchange vows surrounded by nature's beauty
                </p>
              </div>
            </Card>

            {/* Reception */}
            <Card className="wedding-card text-center">
              <div className="mb-6">
                <Users className="w-12 h-12 mx-auto text-primary animate-float-delayed" />
              </div>
              <h3 className="script-heading text-2xl mb-4 text-primary">Reception</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" />
                  6:00 PM
                </p>
                <p className="flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Grand Ballroom
                </p>
                <p className="mt-4 text-sm">
                  Dinner, dancing, and celebration under the stars
                </p>
              </div>
            </Card>

            {/* Photos */}
            <Card className="wedding-card text-center">
              <div className="mb-6">
                <Camera className="w-12 h-12 mx-auto text-primary animate-float" />
              </div>
              <h3 className="script-heading text-2xl mb-4 text-primary">Memories</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" />
                  All Day
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Camera className="w-4 h-4" />
                  #SarahAndMichael
                </p>
                <p className="mt-4 text-sm">
                  Share your photos and help us capture every moment
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Love Story Section */}
      <section className="py-20 px-4 bg-gradient-elegant">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="script-heading text-4xl md:text-5xl mb-12 text-primary">
            Our Love Story
          </h2>
          
          <div className="wedding-card">
            <div className="elegant-text space-y-6 text-muted-foreground">
              <p className="text-lg">
                Our journey began five years ago when we met at a coffee shop on a rainy Tuesday morning. 
                What started as a chance encounter over spilled coffee became the greatest adventure of our lives.
              </p>
              <p className="text-lg">
                Through laughter, tears, adventures, and quiet moments, we've built a love that grows stronger 
                every day. Now, we're ready to write the next chapter of our story together.
              </p>
              <div className="pt-6">
                <Heart className="w-8 h-8 mx-auto text-primary animate-heart-beat fill-current" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="script-heading text-4xl md:text-5xl mb-8 text-primary">
            Join Our Celebration
          </h2>
          
          <div className="wedding-card">
            <p className="text-lg mb-8 text-muted-foreground elegant-text">
              Your presence would make our special day complete. Please let us know if you'll be joining us 
              for this celebration of love, laughter, and happily ever after.
            </p>
            
            <div className="space-y-4">
              <Button className="romantic-button w-full">
                <Heart className="w-5 h-5 mr-2 fill-current" />
                Yes, I'll Be There!
              </Button>
              
              <Button variant="outline" className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-elegant">
                Sorry, Can't Make It
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              Please RSVP by November 15th, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-muted-foreground">
        <div className="max-w-2xl mx-auto px-4">
          <p className="script-heading text-2xl mb-4 text-primary">
            With Love & Gratitude
          </p>
          <p className="text-sm">
            Sarah & Michael • December 15th, 2024 • The Garden Estate
          </p>
          <div className="mt-6 flex justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <Heart 
                key={i} 
                className="w-4 h-4 text-primary fill-current animate-heart-beat" 
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WeddingInvitation;