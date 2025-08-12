
import api from "../api";

export async function login(email: string, password: string) {
  console.log("Logging in with email:", email);
  console.log("Logging in with password:", password);
  try {
    const response = await api.post('/auth/login', {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
}
