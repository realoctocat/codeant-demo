import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { RepositoryList } from "@/components/repository-list";
import { AppSidebar } from "@/components/app-sidebar";

export default function Home() {
  return (
    <SidebarProvider className="flex min-h-screen">
      <AppSidebar />
      <main className="flex-1 bg-zinc-50 dark:bg-background">
        <SidebarTrigger />
        <RepositoryList />
      </main>
    </SidebarProvider>
  );
}
