import type React from "react";
import { Logo } from "@redge/components";
import { Gauge, LayoutDashboard } from "lucide-react";
import { Link, useLocation } from "react-router";
import { Avatar, Text } from "@brifui/components";
import { css } from "@brifui/styled/css";

const menuStyles = css({});

const menuHeaderStyles = css({
  p: 3,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
});

const logoStyles = css.raw({
  w: 7
});

const menuListStyles = css({
  px: 1.5,
  display: "flex",
  flexDirection: "column",
  gap: 1
});

const menuItemStyles = css({
  display: "flex",
  alignItems: "center",
  borderRadius: "component.md",
  gap: 2,
  p: 1.5,
  '&:not([aria-selected="true"])': {
    _hover: {
      bg: "background.hover"
    },
    _active: {
      bg: "background.active"
    }
  },
  _selected: {
    bg: "primary",
    color: "primary.foreground",
    fontWeight: "semibold"
  }
});

const MENU = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    key: "dashboard",
    href: "/"
  },
  {
    icon: Gauge,
    label: "Metrics",
    key: "metrics",
    href: "/metrics"
  }
] as const;

const MenuItem = ({
  icon: Icon,
  label,
  href
}: {
  icon: typeof LayoutDashboard;
  label: string;
  href: string;
}) => {
  const { pathname } = useLocation();
  return (
    <Link to={href}>
      <Text
        as="li"
        type="text.md"
        className={menuItemStyles}
        aria-selected={pathname.startsWith(href) ? true : false}
      >
        <span>
          <Icon size={16} />
        </span>
        {label}
      </Text>
    </Link>
  );
};

export const Menu = () => {
  return (
    <aside className={menuStyles}>
      <div className={menuHeaderStyles}>
        <Logo css={logoStyles} />

        <Avatar src="https://avatars.githubusercontent.com/u/26194994?v=4" />
      </div>
      <ul className={menuListStyles}>
        {MENU.map((menu) => (
          <MenuItem
            key={menu.key}
            label={menu.label}
            icon={menu.icon}
            href={menu.href}
          />
        ))}
      </ul>
    </aside>
  );
};
