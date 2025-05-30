export type Role = "SUPER_ADMIN" | "ADMIN" | "TECH_MANAGER";
export interface FullUsuarioCmsType {
  id: string;
  username: string;
  usernameSort: string;
  email: string;
  role: Role
}

export interface UsuarioCmsFiltersType {
  username: string;
  status: boolean
  createdDate: Date
}

export interface EditUsuarioLoggedSuperAdminType {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export interface EditUsarioLoggedAdminType {
  password: string;
  confirmPassword: string;
}