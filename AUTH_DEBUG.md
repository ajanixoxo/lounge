# Auth Login Debugging

## Current Issue
Login page refreshes but doesn't authenticate the user. Session cookie might not be set or persisted correctly.

## Debug Steps

1. **Stop the current dev server** (Ctrl+C)

2. **Clear terminal** and restart:
```bash
npm run dev
```

3. **Try logging in** with:
   - Username: `rixosadmin`
   - Password: `rixos155123@rixos`

4. **Watch the terminal output** for these debug logs:
   - `[LOGIN] Creating session:` — Should show token and user ID
   - `[LOGIN] Session verified:` — Should show `true`
   - `[LOGIN] Response headers:` — Should show `Set-Cookie` header
   - `[ME] Raw cookie header:` — Should show the session cookie
   - `[DB] GET query:` — Should show SQL queries executing

5. **Browser DevTools** (F12 → Application → Cookies):
   - Check if `rl_session` cookie is set after login
   - Look for `rl_session` cookie with the token value

## Expected Flow
1. POST /api/auth/login → 200 OK + Set-Cookie header
2. Browser saves cookie
3. page reloads (window.location.reload())
4. GET /api/auth/me (browser sends cookie automatically)
5. Server finds session in DB and returns authenticated: true
6. Admin Dashboard renders

## If Still Failing
Share the terminal output showing:
- The [LOGIN] logs after form submit
- The [ME] logs after page reload
- Browser DevTools cookie inspection
