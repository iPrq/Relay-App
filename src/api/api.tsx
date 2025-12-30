async function validateLogin(username: string, password: string): Promise<boolean> {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.isValid || data.success || false;
  } catch (error) {
    console.error('Login validation error:', error);
    return false;
  }
}

async function requestPasswordReset(email: string): Promise<boolean> {
  try {
    const response = await fetch('/api/password-reset', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.success || false;
  } catch (error) {
    console.error('Password reset request error:', error);
    return false;
  }
}

export { validateLogin, requestPasswordReset };
