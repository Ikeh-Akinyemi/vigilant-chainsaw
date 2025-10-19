// app/routes.ts
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
  route("dashboard", "routes/dashboard.tsx", [
    
    // Dashboard child: /dashboard/overview
    route("overview", "routes/dashboard.overview.tsx"),
    
    // Dashboard child: /dashboard/settings
    route("settings", "routes/dashboard.settings.tsx"),
  ]),
] satisfies RouteConfig;