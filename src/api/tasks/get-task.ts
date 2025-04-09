import { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { Task } from "@/@types/task";
import { api } from "@/lib/axios";
import { AxiosError } from "axios";

interface GetTasksSuccessResponse extends HTTPSuccessResponse {
	data: Task[];
}

type GetTasksResponse = GetTasksSuccessResponse | HTTPErrorResponse;

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5YWRiN2NiMi0xMzQ0LTQ5MGItOGFjMS01MWZmOTIyYjliYzAiLCJleHAiOjE3NDQxNjAwMTB9.BjbaiCJypNEfLaJf63thY_6dZzLfHE2_UFlhBk4EU-8"

export async function getTasks(): Promise<GetTasksResponse> {
	try {
		const response = await api.get<GetTasksSuccessResponse>("/tasks", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		return response.data;
	} catch (error) {
		if (error instanceof AxiosError && error.response?.data) {
			return error.response.data;
		}

		return {
			success: false,
			error: "Erro desconhecido",
			data: null,
		};
	}
}
