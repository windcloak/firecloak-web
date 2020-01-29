export class CosplayDetails {
    name: string;
    order: number;
    series: string;
    year: number;
    notes: CosplayNotes[];
    description: string;
    mainImgUrl: string;
    photographer: Photographer[];
    cosplayers: Cosplayer[];
    imgGalleryUrls: ImgGalleryUrls[];
    wipGalleryUrls: WipGalleryUrls[];
    wip: string;
}

// Construction notes
export class CosplayNotes {
    title: string;
    description: string;
}

export class ImgGalleryUrls {
    small: string;
    medium: string;
    big: string;
}

export class WipGalleryUrls {
    img: string;
    desc: string;
}

export class Photographer {
    link: string;
    name: string;
}

export class Cosplayer {
    name: string;
    link: string;
    char: string;
}
