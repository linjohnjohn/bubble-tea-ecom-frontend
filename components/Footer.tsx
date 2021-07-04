import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center my-4 stack-l" style={{ '--space': 'var(--s-2)' } as React.CSSProperties}>
      <p>This site is for demonstrational and educational purpose only.</p>
      <p>
        Designed and built by
        <a className="link" target="_blank" rel="noreferrer noopener" href="https://www.linjohnjohn.me">linjohnjohn</a>
      </p>
    </footer>
  );
};

export default Footer;
