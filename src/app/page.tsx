import React from 'react';
import { InteractiveHeroAndTech } from '@/components/sections/InteractiveHeroAndTech';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { ArchitectureShowcase } from '@/components/sections/ArchitectureShowcase';
import { WhyWorkWithMe } from '@/components/sections/WhyWorkWithMe';
import { ContactSection } from '@/components/sections/ContactSection';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vu Hoang An',
  jobTitle: 'Angular Frontend Developer',
  description:
    'Frontend developer focused on Angular enterprise applications, state management, and performance optimization.',
  url: process.env['NEXT_PUBLIC_SITE_URL'] ?? 'https://example.com',
  knowsAbout: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'GraphQL', 'Frontend Architecture'],
};

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      {/* Interactive Hero + 3D Tech Stack */}
      <InteractiveHeroAndTech />

      {/* Experience Timeline */}
      <ExperienceTimeline />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Architecture Showcase */}
      <ArchitectureShowcase />

      {/* Why Work With Me */}
      <WhyWorkWithMe />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
