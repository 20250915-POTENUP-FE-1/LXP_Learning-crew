import { MainLayoutProps } from "@/features/main/model/page.type";

const MainLayout = ({ children }: MainLayoutProps) => {
  return <main>{children}</main>;
};

export default MainLayout;
