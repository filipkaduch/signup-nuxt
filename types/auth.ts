export interface AuthResponse {
  success: boolean;
}

export interface SessionResponse {
  isAuthenticated: boolean;
}

export interface AuthUser {
  consent: boolean;
  email: string;
  id: string;
}

export interface AuthSession extends AuthResponse {
  user: AuthUser;
}