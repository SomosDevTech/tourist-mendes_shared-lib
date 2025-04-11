export interface UsuarioLoginType {
  email: string;
  password: string;
}

export interface PayloadUsuarioTokenType {
  id: string;
  username: string;
  token: string;
}

export interface CadastroUsarioType {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
