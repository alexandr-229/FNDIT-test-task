'use client';

import { useEffect, useMemo, useState } from 'react';
import { Pagination } from '../types/pagination';
import { useFetch } from '@/shared/hooks/use-fetch';
import { PostsResponse } from '../types/post';

const defaultPagination: Pagination = {
	total: 0,
	count: 10,
	page: 1,
};

export const useGetPosts = () => {
	const [search, setSearch] = useState<string>('');
	const [pagination, setPagination] = useState<Pagination>({ ...defaultPagination });

	useEffect(() => {
		setPagination({ ...defaultPagination });
	}, [search]);

	const url = useMemo(() => {
		const params: Record<string, string> = {
			page: pagination.page.toString(),
			count: pagination.count.toString(),
		};

		if (search.trim().length) {
			params.title = search;
		}

		const result = `/post/all?${new URLSearchParams(params).toString()}`;

		return result;
	}, [search, pagination]);

	const { response, loading } = useFetch<PostsResponse>(url);

	const posts = response?.data || [];

	useEffect(() => {
		if (response && response.pagination) {
			setPagination((pagination) => ({
				...pagination,
				total: response.pagination.total,
			}));
		}
	}, [response]);

	return {
		posts,
		search,
		loading,
		pagination,
		setPagination,
		setSearch,
	};
};
