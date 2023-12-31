import { Button } from "@mantine/core";

function ButtonComponent({ children, color, size }) {
  return (
    <Button size={size} className={`${color} font-bold px-20`}>
      {children}
    </Button>
  );
}

export default ButtonComponent;
