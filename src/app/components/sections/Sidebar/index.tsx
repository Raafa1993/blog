'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import SoundIcon from '@/app/assets/icons/SoundIcon';
import NotSoundIcon from '@/app/assets/icons/NotSoundIcon';
import MoonIcon from '@/app/assets/icons/MoonIcon';
import SunIcon from '@/app/assets/icons/SunIcon';
import Button from '../../buttons/Button';

import { Container, Content, ContentLeft, ContentRight } from './styles';
import Link from 'next/link';

export default function Sidebar() {
  const [menuFixed, setMenuFixed] = useState<boolean>(false);
  const [soundButton, setSoundButton] = useState(true);
  const [themeButton, setThemeButton] = useState(true);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        setMenuFixed(true);
      } else if (window.scrollY === 0) {
        setMenuFixed(false);
      }
    });
    return () =>
      document.removeEventListener('scroll', () => {
        setMenuFixed(false);
      });
  }, []);

  return (
    <Container menuFixed={menuFixed}>
      <Content>
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'tween', duration: 0.8 }}
          initial={{ y: -100, opacity: 0 }}
          style={{ width: '100%' }}
        >
          <div className="container sidebarContainer">
            <ContentLeft>
              <h1>Logo</h1>
            </ContentLeft>

            <ContentRight>
              <button
                className="buttonIcon buttonSound"
                onClick={() => setSoundButton(!soundButton)}
              >
                {soundButton === true ? <SoundIcon /> : <NotSoundIcon />}
              </button>
              <button
                className="buttonIcon buttonTheme"
                onClick={() => setThemeButton(!themeButton)}
              >
                {themeButton === true ? <MoonIcon /> : <SunIcon />}
              </button>
              <Link href={'/blog'} style={{ marginLeft: '34px' }}  passHref legacyBehavior>
                <Button  typeButton="degrade" >
                  Acesse blog
                </Button>
              </Link>
            </ContentRight>
          </div>
        </motion.div>
      </Content>
    </Container>
  );
}
