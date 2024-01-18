"use client";

import React, { ReactNode } from 'react';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-heading';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '@/context/theme-context';

interface ExperienceItem {
  date: string;
  icon: ReactNode;
  title: string;
  location: string;
  description: string;
}


function ExperienceItem({ item }: { item: ExperienceItem }) {

  const { theme } = useTheme();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        contentStyle={{
          background: theme === "light" ? '#f3f4f6' : "rgba(255, 255, 255, 0.05)",
          boxShadow: 'none',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          textAlign: 'left',
          padding: '1.3rem 2rem',
        }}
        contentArrowStyle={{
          borderRight: 
          theme === 'light' 
          ? '0.4rem solid #9ca3af' 
          : "0.4rem solid rgba(255, 255, 255, 0.5)",
        }}
        visible={inView}
        date={item.date}
        icon={item.icon}
        iconStyle={{
          background: theme === "light" ? 'white' : '#313745',
          fontSize: '1.5rem',
        }}
      >
        <h3 className="font-semibold capitalize">{item.title}</h3>
        <p className="!mt-0 font-normal">{item.location}</p>
        <p className="!mt-1 !font-normal text-gray-700 dark:text-white/70">
          {item.description}
        </p>
      </VerticalTimelineElement>
    </div>
  );
}

export default function Experience() {
  const { ref } = useSectionInView('Experience');

  return (
    <section
      ref={ref}
      id="experience"
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
    >
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <ExperienceItem key={index} item={item} />
        ))}
      </VerticalTimeline>
    </section>
  );
}
