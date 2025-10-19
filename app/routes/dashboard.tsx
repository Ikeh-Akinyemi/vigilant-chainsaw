// app/routes/_dashboard.tsx
import { Outlet, useLoaderData } from "react-router";
import type { LoaderFunctionArgs } from "react-router";
import { getUserFromRequest } from "~/auth";
import type { User } from "~/auth";

export async function loader({ request }: LoaderFunctionArgs) {
  console.log("Checking auth in _dashboard layout loader...");
  const user = await getUserFromRequest(request);

  if (!user) {
    console.log("No user, redirecting to /login");
    // This redirect *should* stop everything, but it won't.
    throw Response.redirect(new URL("/login", request.url));
  }

  console.log("User found, returning from layout loader.");
  return new Response(JSON.stringify({ user }), {
    headers: { "Content-Type": "application/json" },
  });
}

export default function DashboardLayout() {
  const { user } = useLoaderData() as { user: User };
  return (
    <div>
      <nav style={{ padding: "10px", background: "#eee" }}>
        <b>Dashboard Layout</b> | Welcome, {user!.name}
      </nav>
      <hr />
      <main>
        <Outlet />
      </main>
    </div>
  );
}