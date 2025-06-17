

export async function onLogin(credentials) {
    const response = await fetch(`localhost:5000/login`, {
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


