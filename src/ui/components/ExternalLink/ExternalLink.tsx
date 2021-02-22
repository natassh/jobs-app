import React from 'react';

const ExternalLink: React.FC<ExternalLinkProps> = ({ className = '', href, text }) => {
  const classes = `${className} link`;
  return (
    <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
}

export default ExternalLink;

type ExternalLinkProps = {
  className: string,
  href: string,
  text: string,
}