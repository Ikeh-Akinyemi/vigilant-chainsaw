// app/routes/dashboard.tsx (FINAL FIX)
import { Outlet, useLoaderData } from "react-router";
import type { LoaderFunctionArgs, MiddlewareFunction } from "react-router";
import { getUserFromRequest } from "~/auth";
import type { User } from "~/auth";
import { userContext } from "~/context";

const authMiddleware: MiddlewareFunction = async ({ request, context }) => {
  console.log("Running auth middleware in _dashboard...");
  const user = await getUserFromRequest(request);

  if (!user) {
    console.log("Middleware: No user, redirecting to /login");

    throw new Response(null, {
      status: 302,
      headers: {
        "Location": "/login",
      },
    });
  }

  console.log("Middleware: User found, setting in context.");
  context.set(userContext, user);
};

export const middleware: MiddlewareFunction[] = [authMiddleware];

export async function loader({ context }: LoaderFunctionArgs) {
  const user = context.get(userContext);
  console.log("Layout loader running (user guaranteed).");
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