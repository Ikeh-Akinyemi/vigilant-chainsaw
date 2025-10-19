import {
  type RouteConfig,
  route,
  index,
} from "@react-router/dev/routes";

export default [
  // Home page: /
  index("routes/_index.tsx"),

  // Login page: /login
  route("login", "routes/login.tsx"),

  // Dashboard layout: /dashboard
  // This maps the URL "/dashboard" to the file "routes/dashboard.tsx"
  route("dashboard", "routes/dashboard.tsx", [

    // Dashboard child: /dashboard/overview
    // This maps "/dashboard/overview" to "routes/dashboard.overview.tsx"
    route("overview", "routes/dashboard.overview.tsx"),

    // We will add the settings page here later.
  ]),
] satisfies RouteConfig;