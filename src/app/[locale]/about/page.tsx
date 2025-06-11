import { routing } from '@/i18n/routing';
import { LampContainer } from '@/components/ui/lamp';
import { motion } from 'motion/react';
import Test from '@/app/[locale]/about/test';
import { Test2 } from '@/app/[locale]/about/test2';
import { ParallaxScroll } from '@/components/ui/parallax-scroll';
import { TextReveal } from '@/components/magicui/text-reveal';

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default function AboutPage() {
  return (
    <div>
      <Test />
      <section className="max-w-7xl mx-auto mb-[200px]">
        <Test2 />
      </section>
      <section>
        <TextReveal>Лучше потратить пару месяцев и действительно чему-то научиться, чем выплюнуть очередной вайб-скоденный проект.</TextReveal>
      </section>
      <section className="mb-[100px]"></section>
    </div>
  );
}
