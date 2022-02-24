import { useEffect, useState } from "react";

export const App = () => {
  const [padding, setPadding] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setPadding((oldPadding) => {
        return oldPadding + 1;
      });
    }, 1000);
  }, []);

  return (
    <div
      style={{ backgroundColor: "aquamarine", color: "red", padding: padding }}
    >
      Teste
    </div>
  );
};
