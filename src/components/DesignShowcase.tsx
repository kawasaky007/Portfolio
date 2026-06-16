'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Section, SectionHeader, Container, Grid, Flex } from '@/components/layouts/Section';
import { ANIMATION_TOKENS, MOTION_VARIANTS, TRANSITION_PRESETS } from '@/lib/animation-tokens';
import { motion } from 'framer-motion';

/**
 * Design System Showcase Component
 * Demonstrates all available design tokens and components
 * Remove or hide this in production
 */
export const DesignShowcase = () => {
  return (
    <div className="space-y-16">
      {/* Buttons Showcase */}
      <Section variant="gradient">
        <Container>
          <SectionHeader title="Button Variants" />

          {/* Solid Buttons */}
          <div className="mb-12">
            <h3 className="heading-md mb-4">Solid Buttons</h3>
            <Flex gap="lg" className="flex-wrap">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
            </Flex>
          </div>

          {/* Outline Buttons */}
          <div className="mb-12">
            <h3 className="heading-md mb-4">Outline Buttons</h3>
            <Flex gap="lg" className="flex-wrap">
              <Button variant="outline">Outline</Button>
            </Flex>
          </div>

          {/* Ghost Buttons */}
          <div className="mb-12">
            <h3 className="heading-md mb-4">Ghost Buttons</h3>
            <Flex gap="lg" className="flex-wrap">
              <Button variant="ghost">Ghost</Button>
            </Flex>
          </div>

          {/* Subtle Buttons */}
          <div className="mb-12">
            <h3 className="heading-md mb-4">Subtle Buttons</h3>
            <Flex gap="lg" className="flex-wrap">
              <Button variant="subtle">Subtle Primary</Button>
              <Button variant="subtle-secondary">Subtle Secondary</Button>
            </Flex>
          </div>

          {/* Glass Buttons */}
          <div className="mb-12">
            <h3 className="heading-md mb-4">Glass Buttons</h3>
            <Flex gap="lg" className="flex-wrap">
              <Button variant="glass">Glass</Button>
            </Flex>
          </div>

          {/* Sizes */}
          <div className="mb-12">
            <h3 className="heading-md mb-4">Button Sizes</h3>
            <Flex gap="lg" className="flex-wrap items-center">
              <Button size="xs">XS</Button>
              <Button size="sm">SM</Button>
              <Button size="default">Default</Button>
              <Button size="lg">LG</Button>
              <Button size="xl">XL</Button>
              <Button size="icon">📝</Button>
            </Flex>
          </div>

          {/* Full Width */}
          <Button fullWidth>Full Width Button</Button>
        </Container>
      </Section>

      {/* Cards Showcase */}
      <Section>
        <Container>
          <SectionHeader title="Card Variants" />

          <Grid columns={2} gap="lg">
            <Card>
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
                <CardDescription>Standard card styling</CardDescription>
              </CardHeader>
            </Card>

            <Card variant="outlined">
              <CardHeader>
                <CardTitle>Outlined Card</CardTitle>
                <CardDescription>Outlined variant</CardDescription>
              </CardHeader>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Elevated Card</CardTitle>
                <CardDescription>With shadow elevation</CardDescription>
              </CardHeader>
            </Card>

            <Card variant="glass">
              <CardHeader>
                <CardTitle>Glass Card</CardTitle>
                <CardDescription>Glass morphism effect</CardDescription>
              </CardHeader>
            </Card>

            <Card variant="interactive">
              <CardHeader>
                <CardTitle>Interactive Card</CardTitle>
                <CardDescription>Hover for scale effect</CardDescription>
              </CardHeader>
            </Card>

            <Card variant="ghost">
              <CardHeader>
                <CardTitle>Ghost Card</CardTitle>
                <CardDescription>Transparent background</CardDescription>
              </CardHeader>
            </Card>
          </Grid>

          <div className="mt-12">
            <h3 className="heading-md mb-4">Card Padding Variants</h3>
            <Grid columns={2} gap="lg">
              <Card padding="sm">Small Padding</Card>
              <Card padding="default">Default Padding</Card>
              <Card padding="lg">Large Padding</Card>
              <Card padding="xl">Extra Large Padding</Card>
            </Grid>
          </div>
        </Container>
      </Section>

      {/* Badges Showcase */}
      <Section variant="dark">
        <Container>
          <SectionHeader title="Badge Variants" />

          <div className="mb-8">
            <h3 className="heading-md mb-4">Colors</h3>
            <Flex gap="lg" className="flex-wrap">
              <Badge>Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="danger">Danger</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="subtle">Subtle</Badge>
            </Flex>
          </div>

          <div>
            <h3 className="heading-md mb-4">Sizes</h3>
            <Flex gap="lg" className="flex-wrap">
              <Badge size="sm">Small</Badge>
              <Badge size="default">Default</Badge>
              <Badge size="lg">Large</Badge>
            </Flex>
          </div>
        </Container>
      </Section>

      {/* Typography Showcase */}
      <Section>
        <Container>
          <SectionHeader title="Typography Scale" />

          <div className="space-y-6">
            <div>
              <p className="caption mb-2">DISPLAY 2XL</p>
              <h1 className="display-2xl">Extra Large Display Text</h1>
            </div>

            <div className="divider my-8" />

            <div>
              <p className="caption mb-2">DISPLAY XL</p>
              <h1 className="display-xl">Large Display Text</h1>
            </div>

            <div className="divider my-8" />

            <div>
              <p className="caption mb-2">DISPLAY LG</p>
              <h1 className="display-lg">Display Text</h1>
            </div>

            <div className="divider my-8" />

            <div>
              <p className="caption mb-2">HEADING LG</p>
              <h2 className="heading-lg">Heading Text</h2>
            </div>

            <div>
              <p className="caption mb-2">BODY LG</p>
              <p className="body-lg">Large body text with comfortable line height for readability</p>
            </div>

            <div>
              <p className="caption mb-2">BODY MD</p>
              <p className="body-md">Regular body text with standard line height</p>
            </div>

            <div>
              <p className="caption mb-2">CAPTION</p>
              <p className="caption">SMALL CAPTION TEXT IN UPPERCASE</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Animation Tokens */}
      <Section variant="glass">
        <Container>
          <SectionHeader title="Animation Tokens" />

          <Grid columns={2} gap="lg" className="mb-12">
            <div>
              <h3 className="heading-md mb-4">Duration Presets</h3>
              <div className="space-y-2 code-block">
                {Object.entries(ANIMATION_TOKENS.duration).map(([key, value]) => (
                  <div key={key}>
                    <span className="text-primary">{key}:</span> {value}ms
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="heading-md mb-4">Delay Presets</h3>
              <div className="space-y-2 code-block">
                {Object.entries(ANIMATION_TOKENS.delay).map(([key, value]) => (
                  <div key={key}>
                    <span className="text-primary">{key}:</span> {value}ms
                  </div>
                ))}
              </div>
            </div>
          </Grid>

          <div>
            <h3 className="heading-md mb-6">Motion Variants (Hover to see)</h3>
            <Grid columns={3} gap="lg">
              {[
                { name: 'Fade In', variant: MOTION_VARIANTS.fadeInUp },
                { name: 'Scale In', variant: MOTION_VARIANTS.scaleIn },
                { name: 'Slide Right', variant: MOTION_VARIANTS.slideInRight },
              ].map(({ name, variant }) => (
                <motion.div
                  key={name}
                  variants={variant}
                  initial="initial"
                  whileInView="animate"
                  transition={TRANSITION_PRESETS.default}
                  viewport={{ once: true }}
                  className="card-base flex items-center justify-center p-12"
                >
                  <p className="text-center">{name}</p>
                </motion.div>
              ))}
            </Grid>
          </div>
        </Container>
      </Section>

      {/* Color Palette */}
      <Section>
        <Container>
          <SectionHeader title="Color Palette" />

          <Grid columns={2} gap="lg" className="mb-12">
            {/* Primary Colors */}
            <div>
              <h3 className="heading-md mb-4">Primary</h3>
              <div className="space-y-2">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((level) => (
                  <div key={level} className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded border border-border"
                      style={{
                        backgroundColor: `hsl(198 100% ${50 - level / 20}%)`,
                      }}
                    />
                    <span className="text-sm">Primary {level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary Colors */}
            <div>
              <h3 className="heading-md mb-4">Secondary</h3>
              <div className="space-y-2">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((level) => (
                  <div key={level} className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded border border-border"
                      style={{
                        backgroundColor: `hsl(142 71% ${50 - level / 20}%)`,
                      }}
                    />
                    <span className="text-sm">Secondary {level}</span>
                  </div>
                ))}
              </div>
            </div>
          </Grid>

          {/* Semantic Colors */}
          <div>
            <h3 className="heading-md mb-4">Semantic Colors</h3>
            <Grid columns={4} gap="lg">
              <div className="space-y-2">
                <div className="w-full h-24 bg-green-500 rounded border border-border" />
                <p className="text-sm">Success</p>
              </div>
              <div className="space-y-2">
                <div className="w-full h-24 bg-yellow-500 rounded border border-border" />
                <p className="text-sm">Warning</p>
              </div>
              <div className="space-y-2">
                <div className="w-full h-24 bg-red-500 rounded border border-border" />
                <p className="text-sm">Danger</p>
              </div>
              <div className="space-y-2">
                <div className="w-full h-24 bg-primary rounded border border-border" />
                <p className="text-sm">Info</p>
              </div>
            </Grid>
          </div>
        </Container>
      </Section>

      {/* Effects Showcase */}
      <Section variant="dark">
        <Container>
          <SectionHeader title="Visual Effects" />

          <Grid columns={2} gap="lg">
            {/* Glass Effect */}
            <Card variant="glass">
              <div className="text-center">
                <h3 className="heading-md mb-2">Glass Morphism</h3>
                <p className="text-sm text-muted-foreground">
                  Frosted glass effect with backdrop blur
                </p>
              </div>
            </Card>

            {/* Gradient Text */}
            <Card>
              <div className="text-center">
                <h3 className="gradient-text display-md mb-2">Gradient Text</h3>
                <p className="text-sm text-muted-foreground">
                  From cyan to green gradient on text
                </p>
              </div>
            </Card>

            {/* Shadow Effects */}
            <Card className="shadow-glow-primary">
              <div className="text-center">
                <h3 className="heading-md mb-2">Glow Primary</h3>
                <p className="text-sm text-muted-foreground">Cyan glow shadow effect</p>
              </div>
            </Card>

            {/* Hover Effects */}
            <Card variant="interactive">
              <div className="text-center">
                <h3 className="heading-md mb-2">Interactive</h3>
                <p className="text-sm text-muted-foreground">Hover to see scale effect</p>
              </div>
            </Card>
          </Grid>
        </Container>
      </Section>
    </div>
  );
};
