
// import type { LoaderFunctionArgs } from "react-router";

// export async function loader({}: LoaderFunctionArgs) {
//   console.log("Running settings loader, forcing auth middleware to run.");
//   return null;
// }

export default function DashboardSettings() {
  return (
    <div>
      <h3>Settings</h3>
      <p>This page now has an empty loader.</p>
    </div>
  );
}