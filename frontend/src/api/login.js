const API_URL = import.meta.env.VITE_API_URL;

export async function onLogin(credentials) {
    alert(API_URL)
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

  return response.json();
};


