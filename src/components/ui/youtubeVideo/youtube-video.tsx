'use client';

import React, { CSSProperties } from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { YouTubeEmbed } from '@next/third-parties/google';
import styles from './styles.module.css';

const YoutubeVideo = ({ id, playlabel = '', width, style }: { id: string; playlabel?: string; width?: number; style?: string }) => {
  return (
    <>
      <YouTubeEmbed videoid={id} playlabel={playlabel} width={width} style={style} />
    </>
  );
};

export default YoutubeVideo;
