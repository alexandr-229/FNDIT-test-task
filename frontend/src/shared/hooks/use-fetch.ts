import { useEffect, useState } from 'react';

export const useFetch = <T = unknown>(url: string) => {
	const [response, setResponse] = useState<T>();
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>();

	useEffect(() => {
		getData()
	}, [url]);

	const getData = async () => {
		try {
			setLoading(true);
			setError(undefined);

			const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`);
			const result: T = await response.json();

			setResponse(result);
		} catch (error) {
			console.log('Failed to fetch:', error);
			if (error instanceof Error) {
				setError(error.message);
			}
		} finally {
			setLoading(false);
		}
	};

	return {
		response,
		loading,
		error,
	};
};
