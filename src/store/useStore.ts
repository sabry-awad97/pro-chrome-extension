import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AppState {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  settings: {
    notifications: boolean;
    autoStart: boolean;
  };
  updateSettings: (settings: Partial<AppState["settings"]>) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      theme: "light",
      setTheme: (theme) => set({ theme }),
      settings: {
        notifications: true,
        autoStart: false,
      },
      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),
    }),
    {
      name: "app-storage",
    }
  )
);
