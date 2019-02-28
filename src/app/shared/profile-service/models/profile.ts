export interface Profile {
  id?: string;
  username: string;
  password: string;
  description: string;
  imageId?: string;
  pictureUrl?: string;
  dateCreated?: Date;
}
