import { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";
import { AxiosError } from "axios";

interface ProfileSuccessResponse extends HTTPSuccessResponse {
	data: {
		user_id: string;
		email: string;
		name: string;
		image: string;
	};
}

type ProfileResponse = ProfileSuccessResponse | HTTPErrorResponse;

export async function getProfile(): Promise<ProfileResponse> {
	try {
		const response = await api.get<ProfileSuccessResponse>("/auth/profile");

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
