import { getTranslations } from 'next-intl/server';

export const getHomeTranslations = async () => {
  const t = await getTranslations('Home');

  return {
    topPicksHeading: t('TopPicks.heading'),
    topPicksBackground: t('TopPicks.backgroundHeading'),
    nowPlayingHeading: t('NowPlaying.heading'),
    nowPlayingBackground: t('NowPlaying.backgroundHeading'),
    upcomingHeading: t('Upcoming.heading'),
    upcomingBackground: t('Upcoming.backgroundHeading'),
  };
};
