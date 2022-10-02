export const refreshTokens = async (): Promise<void> => {
  const url = `${import.meta.env.VITE_BACKEND_ENDPOINT}/refresh-tokens`;

  const response = await fetch(url, {
    method: 'GET',
  });

  const body = await response.json();

  // @TODO - remove log after finishing logic for refreshing tokens
  console.log(body);
};
