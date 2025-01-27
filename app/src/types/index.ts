export type Photo = {
	photoId: number;
	url: string;
	albumId: number;
	title: string;
};

export type Album = {
	albumId: number;
	photos: Photo[];
};
