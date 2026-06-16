'use client';

import React, { useState } from 'react';
import { Button, type ButtonProps } from '@/components/ui/button';

interface DownloadPortfolioButtonProps extends Omit<ButtonProps, 'onClick'> {
  label?: string;
  fileName?: string;
  targetId?: string;
}

export const DownloadPortfolioButton = ({
  label = 'Download CV',
  fileName = 'vu-hoang-an-portfolio.pdf',
  targetId = 'main-content',
  ...buttonProps
}: DownloadPortfolioButtonProps) => {
  const [isExporting, setIsExporting] = useState(false);

  const handleDownload = async () => {
    if (isExporting) {
      return;
    }

    setIsExporting(true);

    try {
      const previousTitle = document.title;
      const target = document.getElementById(targetId);

      if (!target) {
        throw new Error(`Target element #${targetId} was not found.`);
      }

      document.title = fileName.replace(/\.pdf$/i, '');
      document.body.setAttribute('data-printing', 'true');
      window.print();
      window.setTimeout(() => {
        document.title = previousTitle;
        document.body.removeAttribute('data-printing');
      }, 300);
    } catch (error) {
      console.error('Failed to export portfolio PDF:', error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <Button
      {...buttonProps}
      onClick={handleDownload}
      disabled={isExporting || buttonProps.disabled}
      aria-label={isExporting ? 'Opening print dialog for portfolio PDF' : 'Download portfolio as PDF'}
    >
      {isExporting ? 'Opening PDF...' : label}
    </Button>
  );
};
