import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { ReactNode } from "react";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Destination Dino
      </Link>
      <ul>
        <CustomLink to="/profile">Profile</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/signinSide">Sign In </CustomLink>
      </ul>
    </nav>
  );
}

interface CustomLinkProps {
  to: string;
  children: ReactNode;
}

function CustomLink({ to, children, ...props }: CustomLinkProps) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
