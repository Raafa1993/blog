'use client';
import ExperienceUi from '../../widgets/ExperienceUi';

import UserIcon from '@/app/assets/icons/UserIcon';
import { Section } from '@/app/styles';
import possibilityImage from '../../../../../public/possibility.png';
import Button from '../../buttons/Button';
import SectionTitle from '../../widgets/SectionTitle';

import { motion } from 'framer-motion';

import Image from 'next/image';
import {
  ContentImageAbout,
  DescriptionAbout,
  SectionContent,
  SectionExperience,
  SectionInfoAbout
} from './styles';

export default function About() {
  return (
    <Section className={`container`} id="About">
      <SectionTitle title="About me" subTitle="Sobre mim" />

      <div className="gradient-07" />

      <SectionContent>
        <motion.div
          initial={{ opacity: 0, x: '-100%' }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: 'tween', duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ContentImageAbout>
            <Image src={possibilityImage} alt="possibility" />
          </ContentImageAbout>
        </motion.div>

        <SectionInfoAbout>
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'tween', duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              gap: '1rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}
          >
            <SectionExperience>
              <ExperienceUi title="Experiência" subTitle="5 - anos" icon={<UserIcon />} />
              <ExperienceUi title="Completados" subTitle="12 - Projetos" icon={<UserIcon />} />
              <ExperienceUi title="Suporte" subTitle="Online 24/7" icon={<UserIcon />} />
            </SectionExperience>

            <DescriptionAbout>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit amet amet, eleifend
              porttitor est at tristique enim. Dui urna pellentesque feugiat in enim integer. Quam
              tristique arcu in quis viverra consequat arcu volutpat.
            </DescriptionAbout>

            <Button typeButton="default">contate-me</Button>
          </motion.div>
        </SectionInfoAbout>
      </SectionContent>
    </Section>
  );
}
