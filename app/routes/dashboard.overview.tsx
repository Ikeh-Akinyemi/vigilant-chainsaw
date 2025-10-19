import { Outlet, useLoaderData } from "react-router";
import type { LoaderFunctionArgs } from "react-router";
import { userContext } from "~/context";

async function getOverviewData(userId: string) {
  console.log(`Fetching overview data for user ${userId}...`);
  return { totalRevenue: 5000 };
}

export async function loader({ context }: LoaderFunctionArgs) {
  console.log("✅ _dashboard.overview loader IS RUNNING (sequentially)");
  const user = context.get(userContext);
  const overviewData = await getOverviewData(user!.id);
  return new Response(JSON.stringify(overviewData), {
    headers: { "Content-Type": "application/json" },
  });
}

export default function DashboardOverview() {
  return <h3>Overview Page Content</h3>;
}