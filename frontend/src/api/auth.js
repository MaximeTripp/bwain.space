const API_URL = import.meta.env.VITE_API_URL;

export async function loginUser(credentials) {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return await response.json();
};

export async function refreshToken() {
  const res = await fetch(`${API_URL}/login/refresh`, {
    method: 'POST',
    credentials: 'include',
  });

  if (!res.ok) throw new Error('Refresh failed');
  return await res.json(); 
}

export async function logoutUser() {
  await fetch(`${API_URL}/login/logout`, {
    method: 'POST',
    credentials: 'include',
  });
}