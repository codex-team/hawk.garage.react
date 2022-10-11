export const signup = async (email: string): Promise<void> => {
  const url = `${import.meta.env.VITE_BACKEND_ENDPOINT}/signup`;

  const data = {
    email,
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const body = await response.json();

  // @TODO - remove log after finishing logic for signup
  console.log(body);
};
