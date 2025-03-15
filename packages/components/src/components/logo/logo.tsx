import { css as _css, cx, Styles } from "@brifui/styled/css";

import { containerStyles } from "./styles";

export const Logo = ({
  css,
  withText = false,
  className,
  ...props
}: React.ComponentPropsWithRef<"div"> & {
  withText?: boolean;
  css?: Styles;
}) => {
  return (
    <div className={cx(_css(containerStyles, css), className)} {...props}>
      {!withText && (
        <img width={42} height={42} alt="redge logo" src="/redge-logo.png" />
      )}
      {withText && (
        <img
          width={1611}
          height={398}
          alt="redge logo with text"
          src="/redge-logo-with-text.png"
        />
      )}
    </div>
  );
};
