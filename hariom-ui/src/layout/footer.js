import { menu_config } from "../config/menu.config";

export default function Footer() {
  return (
    <footer className="w-full bg-black bg-opacity-70 text-white text-xs py-4 grid grid-cols-2 space-y-2 md:space-y-0 md:flex items-center justify-center py-2 md:divide-x md:divide-neutral">
      {menu_config.footer.map((ftr, idx) => (
        <a href={ftr.link} className="px-4 hover:underline" key={idx}>
          {ftr.title}
        </a>
      ))}
    </footer>
  );
}
