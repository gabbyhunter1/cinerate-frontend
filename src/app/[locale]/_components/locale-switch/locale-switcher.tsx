import { useLocale, useTranslations } from 'next-intl';
import { routing } from '@/i18n/routing';
import LocaleSwitcherSelect from '@/app/[locale]/_components/locale-switch/locale-switcher-select';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {routing.locales.map(cur => {
        return (
          <option key={cur} value={cur}>
            {cur.slice(0, 2).toUpperCase()}
          </option>
        );
      })}
    </LocaleSwitcherSelect>
  );
}
