import { socials } from "../../data/navbar";
import { socialIcons } from "./icons";

export default function Socials({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map(({ label, href, icon }) => {
        const Icon = socialIcons[icon];
        return (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="icon-btn">
            <Icon size={16} />
          </a>
        );
      })}
    </div>
  );
}
