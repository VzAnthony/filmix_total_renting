// src/hooks/useFetch.ts
import { useState, useEffect } from "react";

type FetchOptions = {
    method?: string;
    headers?: HeadersInit;
};

export function useFetch<T>(url: string, options?: FetchOptions) {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const fetchData = async () => {
            setIsLoading(true);
            setIsError(false);

            try {
                const res = await fetch(url, {
                    method: options?.method || "GET",
                    headers: options?.headers,
                    signal: controller.signal
                });

                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

                const jsonData = await res.json();
                if (isMounted) setData(jsonData);
            } catch (error) {
                if (error instanceof Error && error.name !== "AbortError") {
                    if (isMounted) setIsError(true);
                }
            } finally {
                if (isMounted) setIsLoading(false);
            }
        };

        fetchData();

        return () => {
            isMounted = false;
            controller.abort();
        };
    }, [url, options?.headers, options?.method]);

    return { data, isLoading, isError };
}
