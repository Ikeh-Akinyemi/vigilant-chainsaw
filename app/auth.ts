// app/auth.ts
export interface User {
  id: string;
  name: string;
  email: string;
}

// -------------------------------------------------------------
// FOR THIS "BROKEN" TEST, USE THE 'null' LINE
// -------------------------------------------------------------
let FAKE_LOGGED_IN_USER: User | null = null;
// let FAKE_LOGGED_IN_USER: User | null = {
//   id: "123",
//   name: "Jane Doe",
//   email: "jane@example.com",
// };
// -------------------------------------------------------------

export async function getUserFromRequest(request: Request): Promise<User | null> {
  await new Promise((res) => setTimeout(res, 100));
  return FAKE_LOGGED_IN_USER;
}