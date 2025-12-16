import { FC, useState } from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import ForgeButton from "@/components/ui/ForgeButton";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const ForgeNavbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ FIX: session is now defined
  const { data: session } = useSession();

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50 
        backdrop-blur-xl 
        bg-forgeMetal/40 
        border-b border-forgeGlow/20 
        shadow-forgeGlow
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <Link
          href="/"
          className="text-2xl font-bold text-forgeBlue drop-shadow-md"
        >
          Forge Studio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-forgeBlue transition-all"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Actions (Auth) */}
        <div className="hidden md:flex items-center gap-4">
          {!session ? (
            <ForgeButton
              label="Login"
              variant="primary"
              onClick={() => signIn()}
            />
          ) : (
            <>
              {session.user?.image && (
                <img
                  src={session.user.image}
                  alt="User avatar"
                  className="w-9 h-9 rounded-full border border-forgeGlow/30"
                />
              )}
              <ForgeButton
                label="Logout"
                variant="secondary"
                onClick={() => signOut()}
              />
            </>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-forgeBlue"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-forgeBlue"></span>
            <span className="block w-6 h-0.5 bg-forgeBlue"></span>
            <span className="block w-6 h-0.5 bg-forgeBlue"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div className="md:hidden bg-forgeMetal/90 border-t border-forgeGlow/20 py-4 px-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block text-lg hover:text-forgeBlue"
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Auth Actions */}
          <div className="pt-4 border-t border-forgeGlow/20">
            {!session ? (
              <ForgeButton
                label="Login"
                variant="primary"
                onClick={() => signIn()}
              />
            ) : (
              <ForgeButton
                label="Logout"
                variant="secondary"
                onClick={() => signOut()}
              />
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default ForgeNavbar;
