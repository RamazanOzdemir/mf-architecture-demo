import { ReactNode, useEffect, useState } from "react";
import { initFragments } from "./lib/inti-fragments";

export default function Startup(props: { children: ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    initFragments();

    setIsReady(true);
    return () => {};
  }, []);

  return isReady ? props.children : null;
}
