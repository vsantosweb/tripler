import React, { FC } from "react";
import AppLayout from "./AppLayout";
import AuthLayout from "./AuthLayout";

const layouts = {
    AppLayout: AppLayout,
    AuthLayout: AuthLayout
};

interface LayoutProps {
    layoutType: "AppLayout";
}

export const Layout: FC<LayoutProps> = ({ children, layoutType }) => {

    let Component = layouts[layoutType] || React.Fragment;
    return <Component>{children}</Component>;

};
