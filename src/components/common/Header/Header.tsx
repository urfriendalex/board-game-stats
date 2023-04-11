import React from 'react';
import { splitToSpans } from '../../../tools/helpers';

type HeaderProps = {
  logo: string;
};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header-wrapper flex justify-between items-center py-4 px-6">
      <a href="/" className="logo-wrapper text-sm">
        <div className="text-main">{splitToSpans('chillery', '')}</div>
        <div className="text-secondary">{splitToSpans('chillery', '')}</div>
      </a>
      <div className="uppercase text-sm">Menu</div>
    </header>
  );
};

export default Header;
