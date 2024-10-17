import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Popup } from "@/pages/Popup";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="extension-theme">
      <div className="min-h-screen">
        <Popup />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
