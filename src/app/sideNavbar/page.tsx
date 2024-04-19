"use client";
import React, { useState } from "react";
import { Nav } from "@/components/ui/nav";
import {
  LayoutDashboard,
  UserRound,
  Layers2,
  Cuboid,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWindowWidth } from "@react-hook/window-size/throttled";

type Props = {};

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSideBar = () => {
    setIsCollapsed(!isCollapsed);
  };
  const onlyWidth = useWindowWidth();
  const mobile = onlyWidth < 768;

  return (
    <div className="relative">
      <div className=" fixed min-w-[80] h-screen border-r px-5 py-[90px]  ">
        <div>
          <Nav isCollapsed={mobile ? true : isCollapsed} links={data}></Nav>
        </div>
        {!mobile && (
          <div className="absolute  right-[-15px]  top-[45px] mt-[50px]  ">
            <Button
              variant={"secondary"}
              className="rounded-full p-2  "
              onClick={toggleSideBar}
            >
              {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
  
}
export const data: any[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
    variant: "default",
  },
  {
    title: "Users",
    href: "/users",
    icon: UserRound,
    variant: "ghost",
  },
  {
    title: "Articles",
    href: "/articles",
    icon: Layers2,
    variant: "ghost",
  },
  {
    title: "Category",
    href: "/categories",
    icon: Cuboid,
    variant: "ghost",
  },
];
