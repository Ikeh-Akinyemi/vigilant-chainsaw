// app/routes/_dashboard.overview.tsx
import { Outlet, useLoaderData } from "react-router";
import type { LoaderFunctionArgs } from "react-router";
import { getUserFromRequest } from "~/auth";

async function getOverviewData(userId: string) {
  console.log(`Fetching overview data for user ${userId}...`);
  return { totalRevenue: 5000 };
}

export async function loader({ request }: LoaderFunctionArgs) {
  console.log("❌ ERROR: _dashboard.overview loader IS RUNNING!");

  // Problem: Redundant data fetching.
  const user = await getUserFromRequest(request);

  if (!user) {
    console.log("Overview loader found no user.");
    return new Response(JSON.stringify({ error: "User not found" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const overviewData = await getOverviewData(user.id);
  return new Response(JSON.stringify(overviewData), {
    headers: { "Content-Type": "application/json" },
  });
}

export default function DashboardOverview() {
  return <h3>Overview Page Content</h3>;
}