import { ReactNode, useContext } from "react";
import { LevelContext } from "./LevelContext";

export default function Section({ level, children }: { level?: number, children: ReactNode }) {
  const parentLevel = useContext(LevelContext)

  if (!level) {
    level = parentLevel + 1
  }

  return (
    <section className="section">
      <LevelContext.Provider value={level}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
