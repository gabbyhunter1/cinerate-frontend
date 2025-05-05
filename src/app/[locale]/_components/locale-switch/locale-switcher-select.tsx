'use client';

import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { Locale } from 'next-intl';
import { ChangeEvent, ReactNode, useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { ChevronDown } from 'lucide-react';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({ children, defaultValue, label }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <label
      className={clsx(
        'relative text-gray-400 flex items-center cursor-pointer hover:text-primary',
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      )}>
      <p className="sr-only">{label}</p>
      <select
        className="relative cursor-pointer appearance-none text-md font-normal text-whiteText hover:text-primary"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}>
        {children}
      </select>
      <ChevronDown size={20} />
    </label>
  );
}
