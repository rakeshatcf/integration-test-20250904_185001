export interface User {
  id: string;
  email: string;
  password?: string;
  resetToken?: string;
  resetTokenExpiry?: Date;
}

export interface AuthResponse {
  token: string;
  user: Omit<User, 'password' | 'resetToken' | 'resetTokenExpiry'>;
}

export interface PasswordResetRequest {
  email: string;
}

export interface PasswordResetConfirm {
  token: string;
  newPassword: string;
}

export interface ApiError {
  message: string;
  code?: string;
}