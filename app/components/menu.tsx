import { Logo } from "@redge/components";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  FoldersIcon,
  GaugeIcon,
  LayoutDashboardIcon,
  SquareTerminalIcon
} from "lucide-react";
import { ROUTES } from "packages/common/src/constants";
import { Link, useLocation } from "react-router";
import { Avatar, Button, Sidebar, useSidebar } from "@brifui/components";
import { css } from "@brifui/styled/css";

const menuStyles = css.raw({
  bg: "transparent",
  borderColor: "transparent"
});

const menuHeaderStyles = css.raw({
  p: 2,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between"
});

const logoStyles = css.raw({
  w: 8,
  h: 8
});

const MENU = [
  {
    icon: LayoutDashboardIcon,
    label: "Dashboard",
    key: "dashboard",
    href: "/"
  },
  {
    icon: GaugeIcon,
    label: "Metrics",
    key: "metrics",
    href: "/metrics"
  },
  {
    icon: FoldersIcon,
    label: "Projects",
    key: "projects",
    href: "/projects"
  }
] as const;

const CollapseButton = () => {
  const { isOpen, setOpen } = useSidebar();

  return (
    <div
      className={css({
        p: 2
      })}
    >
      <Button
        size={isOpen ? "md" : "icon"}
        fluid={isOpen}
        onClick={() => setOpen((prev) => !prev)}
      >
        {isOpen && (
          <>
            <Button.Prefix>
              <ChevronLeftIcon />
            </Button.Prefix>
            Collapse
          </>
        )}
        {!isOpen && (
          <>
            <ChevronRightIcon />
          </>
        )}
      </Button>
    </div>
  );
};

export const Menu = () => {
  const { isOpen } = useSidebar();
  const { pathname } = useLocation();

  return (
    <Sidebar.Root isOpen={isOpen} css={menuStyles}>
      <Sidebar.Header>
        <Sidebar.Menu css={menuHeaderStyles}>
          <Link to={ROUTES.HOME}>
            <Logo css={logoStyles} />
          </Link>
          <Avatar src="https://avatars.githubusercontent.com/u/26194994?v=4" />
        </Sidebar.Menu>
      </Sidebar.Header>
      <Sidebar.Body>
        <Sidebar.Group>
          {MENU.map((item) => (
            <Sidebar.Menu key={item.key}>
              <Sidebar.MenuItem
                as={Link}
                to={item.href}
                label={item.label}
                isSelected={
                  item.href === "/"
                    ? pathname === item.href
                    : pathname.startsWith(item.href)
                }
              >
                <Sidebar.MenuItemIcon>
                  <item.icon />
                </Sidebar.MenuItemIcon>
                <Sidebar.MenuItemLabel>{item.label}</Sidebar.MenuItemLabel>
              </Sidebar.MenuItem>
            </Sidebar.Menu>
          ))}
        </Sidebar.Group>
      </Sidebar.Body>
      <Sidebar.Footer>
        <Sidebar.Menu>
          <CollapseButton />
        </Sidebar.Menu>
      </Sidebar.Footer>
    </Sidebar.Root>
  );
};
