import { Link, type LinkProps } from 'react-router-dom';

interface ExternalLinkProps extends Omit<LinkProps, 'to'> {
  href: string; 
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children, ...props }) => {
  const encodedUrl = encodeURIComponent(href);
  
  return (
    <Link to={`/ExitPage?url=${encodedUrl}`} {...props}>
      {children}
    </Link>
  );
};

export default ExternalLink;