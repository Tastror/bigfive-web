'use client';

import { Button, ButtonGroup, Select, SelectItem } from '@nextui-org/react';
import { Domain } from '@bigfive-org/results';
import { useState } from 'react';
import { DomainPage } from './domain';
import { useTranslations } from 'next-intl';

interface DomainTabsProps {
  results: Domain[];
  showExpanded: boolean;
  scoreText: string;
}

export const DomainTabs = ({
  results,
  showExpanded,
  scoreText
}: DomainTabsProps) => {
  const t = useTranslations('results');
  const [active, setActive] = useState('all');

  const domains = [
    { title: t('all'), domain: 'all' },
    ...results.map((result) => ({ title: result.title, domain: result.domain }))
  ];

  const activeDomains =
    active === 'all'
      ? results
      : results.filter((result) => result.domain === active);

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setActive(e.target.value);

  return (
    <>
      <div className='flex justify-center my-10'>
        <ButtonGroup className='print:hidden hidden md:flex'>
          {domains.map(({ title, domain }) => (
            <Button
              key={domain}
              onClick={() => setActive(domain)}
              className={active === domain ? 'bg-primary text-white' : ''}
            >
              {title}
            </Button>
          ))}
        </ButtonGroup>

        <Select
          label={t('selectDomain')}
          className='max-w-xs md:hidden'
          items={domains}
          selectedKeys={[active]}
          onChange={handleSelectionChange}
        >
          {({ domain, title }) => <SelectItem key={domain}>{title}</SelectItem>}
        </Select>
      </div>
      {activeDomains.map((result: Domain, index: number) => (
        <DomainPage
          key={index}
          domain={result}
          scoreText={scoreText}
          showExpanded={showExpanded}
        />
      ))}
    </>
  );
};
