import { Role } from "@/config/prisma/generatedFiles";

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
  password: string;
  confirmPassword: string;
}

export interface ForgotPassword {
  email: string;
}
export interface RecoverPassword {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}