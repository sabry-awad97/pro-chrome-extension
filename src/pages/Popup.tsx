import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/hooks/useTheme";
import { useStore } from "@/store/useStore";
import { Bell, Moon, Sun } from "lucide-react";

export function Popup() {
  const { theme, setTheme } = useTheme();
  const { settings, updateSettings } = useStore();

  return (
    <Card className="w-[350px] border-none">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">Extension Name</CardTitle>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <Bell className="h-4 w-4" />
            <span className="font-medium">Notifications</span>
          </div>
          <Switch
            checked={settings.notifications}
            onCheckedChange={(checked) =>
              updateSettings({ notifications: checked })
            }
          />
        </div>
        {/* Add more settings here */}
      </CardContent>
    </Card>
  );
}
