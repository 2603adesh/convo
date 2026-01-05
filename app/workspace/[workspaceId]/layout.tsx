"use client"

import { Toolbar } from "./toolbar";
import { Sidebar } from "./sidebar";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { WorkspaceSidebar } from "./workspace-sidebar";

interface WorkspaceIdLayoutProps {
    children : React.ReactNode;
};

const WorkspaceIdLayout = ( {children} : WorkspaceIdLayoutProps) => {
    return (
        <div className="h-full">
            <Toolbar />
            <div className="flex h-[calc(100vh-40px)]">
                <Sidebar />
                <ResizablePanelGroup
                orientation = "horizontal"
                autoSave = "workspace-layout">
                    <ResizablePanel
                    defaultSize={150}
                    minSize={50}
                    className="bg-[#5E2C5F]"
                    id="sidebar">
                       <WorkspaceSidebar />
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel minSize={20}
                    id="main">
                {children}
                </ResizablePanel>
                </ResizablePanelGroup>
            </div>
            
        </div>
    )
}

export default WorkspaceIdLayout;