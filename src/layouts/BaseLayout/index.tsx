import { Outlet } from "react-router";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import AppHeader from "@/components/layout/AppHeader";
import AppSidebar from "@/components/layout/AppSidebar";
import AppContent from "@/components/layout/AppContent";
// import BaseFooter from '@/components/layout/BaseFooter';

// const defaultLayoutStyle: React.CSSProperties = {
// 	overflow: 'hidden',
// 	width: '100%',
// };

function BaseLayout() {
  // return (
  // 	<Layout className='w-full h-full' style={mergedLayoutStyle}>
  // 		<BaseSider />
  // 		<Layout>
  // 			<BaseHeader />
  // 			<BaseContent>
  // 				<Outlet />
  // 			</BaseContent>
  // 			<BaseFooter />
  // 		</Layout>
  // 	</Layout>
  // );

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <AppContent>
          <Outlet />
        </AppContent>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default BaseLayout;
