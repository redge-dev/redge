import React, { useEffect } from "react";
import { useSession } from "@redge/auth/client";
import { ROUTES } from "@redge/common/constants";
import { useNavigate } from "react-router";

export const SessionProvider: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  const navigate = useNavigate();
  const { data, isPending } = useSession();

  useEffect(() => {
    if (!isPending && !data) navigate(ROUTES.AUTH_SIGNIN);
  }, [isPending, data, navigate]);

  return <>{children}</>;
};
