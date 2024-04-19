import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

class APIClient {
  private axiosInstance: AxiosInstance;
  private baseURL: string;

  constructor() {
    this.baseURL = import.meta.env.VITE_API_BASE_URL || "";

    if (!this.baseURL) {
      throw new Error(
        "API base URL is not set. Please set it in the .env file."
      );
    }

    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
    });

    this.axiosInstance.interceptors.response.use(
      this.handleSuccessResponse,
      this.handleErrorResponse
    );
  }

  private handleSuccessResponse<T>(response: AxiosResponse<T>) {
    return response;
  }

  private handleErrorResponse(error: AxiosError): Promise<never> {
    if (error.response) {
      console.error("Request failed with status code:", error.response.status);
      console.error("Response data:", error.response.data);
      console.error("Response headers:", error.response.headers);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Request setup error:", error.message);
    }
    return Promise.reject(error);
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.get(
      url,
      config
    );
    return response.data;
  }

  public async post<T, R>(
    url: string,
    data: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    const response: AxiosResponse<R> = await this.axiosInstance.post(
      url,
      data,
      config
    );
    return response.data;
  }

  public async put<T, R>(
    url: string,
    data: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    const response: AxiosResponse<R> = await this.axiosInstance.put(
      url,
      data,
      config
    );
    return response.data;
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.delete(
      url,
      config
    );
    return response.data;
  }
}

export const apiClient = new APIClient();
export default APIClient;
