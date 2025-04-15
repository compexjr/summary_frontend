import { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";
import { AxiosError } from "axios";

interface UpdatePasswordRequestBody {
	currentPassword: string;
	newPassword: string;
}

interface UpdatePasswordSuccessResponseBody extends HTTPSuccessResponse {
	data: null;
}

type UpdatePasswordResponse = UpdatePasswordSuccessResponseBody | HTTPErrorResponse;

export async function updatePassword(body: UpdatePasswordRequestBody): Promise<UpdatePasswordResponse> {
	try {
		const response = await api.put<UpdatePasswordSuccessResponseBody>(
			"/auth/update-password",
			body
		);

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
