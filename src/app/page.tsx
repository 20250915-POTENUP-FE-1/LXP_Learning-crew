// "use client";

import APP_ROUTES from "@/shared/constants/routes";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(APP_ROUTES.MAIN.DEFAULT);
}
