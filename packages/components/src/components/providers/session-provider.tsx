import React, { useEffect } from "react";
import { useSession } from "@redge/auth/client";
import { PUBLIC_ROUTES, ROUTES } from "@redge/common/constants";
import { useLocation, useNavigate } from "react-router";
import { toast } from "@brifui/components";

export const SessionProvider: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { data, isPending } = useSession();

  useEffect(() => {
    const isPublicRoute = PUBLIC_ROUTES.has(pathname);
    if (!isPending && data && isPublicRoute) {
      toast("Welcome back!");
      navigate(ROUTES.HOME);
    }
  }, [isPending, data, navigate, pathname]);

  useEffect(() => {
    const isPublicRoute = PUBLIC_ROUTES.has(pathname);
    if (!isPending && !data && !isPublicRoute) {
      toast("Your session is expired, please log in again");
      navigate(ROUTES.AUTH_SIGNIN);
    }
  }, [isPending, data, navigate, pathname]);

  return <>{children}</>;
};
