import APP_ROUTES from "@/shared/constants/appRoutes";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(APP_ROUTES.MAIN.DEFAULT);
}
