export interface CreatedBy {
  id: string;
  username: string;
  email: string;
}

export interface UpdatedBy {
  id: string;
  username: string;
  updatedAt: Date;
}



export interface RequestMediaCmsData {
  id: string;
  data: File;
  altDescription: string;
  action: 'UPDATE' | 'DELETE';
}


export interface ResponseMediaCmsData {
  id: string;
  linkUrl: string;
  altDescription: string;
}