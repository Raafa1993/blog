'use client'
import { Section } from '@/app/styles';
import SectionTitle from '../../widgets/SectionTitle';

import SendImage from "../../../../../public/Send.svg";
import ShieldImage from "../../../../../public/Shield.svg";
import StarImage from "../../../../../public/Star.svg";


import { Skills } from '@/app/Data/Skills';
import CardSkils from '../../CardSkils';
import {
  CardItem,
  CardSkills,
  Content,
  SectionExperience,
  SectionSkills,
  SkillItem
} from './styles';

export const features = [
  {
    id: "feature-1",
    icon: StarImage,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: ShieldImage,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: SendImage,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];


export default function Experience() {
  return (
    <Section className={`container`} id="About">
      <SectionTitle
        title='Skills'
        subTitle='Habilidades'
      />

      <Content>
        <SectionSkills>
          <CardSkills>
            <h2>Frontend Developer</h2>
            <CardItem>
              {Skills.map((row) => (
                <SkillItem key={row.id}>
                  {row.icon}
                  <div className="infoItem">
                    <h3>{row.skill}</h3>
                    <span>{row.level}</span>
                  </div>
                </SkillItem>

              ))}
            </CardItem>
          </CardSkills>
        </SectionSkills>

        <SectionExperience>
          {features.map((feature, index: any) => (
            <CardSkils key={feature.id} {...feature} isLast={index} />
          ))}
        </SectionExperience>
      </Content>
    </Section>
  )
}
