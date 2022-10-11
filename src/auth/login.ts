export const login = async (email: string, password: string): Promise<void> => {
  const url = `${import.meta.env.VITE_BACKEND_ENDPOINT}/login?` + new URLSearchParams({
    email,
    password,
  });

  const response = await fetch(url, {
    method: 'GET',
  });

  const body = await response.json();

  // @TODO - remove log after finishing logic for login
  console.log(body);
};
