import { Role } from "@/config/prisma/generatedFiles";

export interface FullUsuarioCmsType {
  id: string;
  username: string;
  email: string;
  role: Role
}

export interface UsuarioCmsFiltersType {
  username: string;
  status: boolean
  createdDate: Date
}