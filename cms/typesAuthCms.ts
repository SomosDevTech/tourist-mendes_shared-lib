import { Role } from "@prisma/client";

export interface UsuarioLoginType {
  email: string;
  password: string;
}

export interface PayloadUsuarioTokenType {
  id: string;
  username: string;
  role: Role;
  email: string;
  token: string;
}

export interface CadastroUsarioType {
  username: string;
  email: string;
}

export interface ForgotPasswordType {
  email: string;
}
export interface RecoverPasswordType {
  newPassword: string;
  confirmPassword: string;
}

export interface RegisterFinalizedType {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}