// -------------------------------------------------
// Services
// -------------------------------------------------
import { Api } from '../../services/api';

export const LoginRequest = async (email: string, password: string) => {
  try {
    const response = await Api.post('login', {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    return null;
  }
};
