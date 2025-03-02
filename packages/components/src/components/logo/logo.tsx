import { containerStyles } from "./styles";

export const Logo = ({
  withText = false,
  className,
  ...props
}: React.ComponentPropsWithRef<"div"> & { withText?: boolean }) => {
  return (
    <div className={containerStyles} {...props}>
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
