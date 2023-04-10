import Image from "next/image";
import { Content, FeatureCardContainer, IconContainer, Title } from "./styles";

type SkilProps = {
  icon: any;
  title: string;
  content: any;
  isLast: any;
}

export default function CardSkils({ icon, title, content, isLast }: SkilProps) {
  return (
    <FeatureCardContainer isLast={isLast}>
      <IconContainer>
        <Image src={icon} alt="star"/>
      </IconContainer>
      <div style={{ flex: 1, marginLeft: '1rem' }}>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </div>
    </FeatureCardContainer>
  )
}
