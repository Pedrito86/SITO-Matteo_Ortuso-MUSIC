export interface Track {
  title: string;
  duration: string;
  collaborations?: string[];
  youtubeId?: string; // Optional: Specific YouTube Video ID for this track
}

export interface Album {
  title: string;
  year: string;
  cover: string; // Placeholder path
  youtubeId?: string; // YouTube Playlist ID
  tracks: Track[];
}

export const albums: Album[] = [
  {
    title: "BLU",
    year: "2025",
    cover: "/images/blu-cover.png", 
    youtubeId: "OLAK5uy_lh9UHHW9I1e34R793CVvx175D9L0u6Gho",
    tracks: [
      {
        title: "LA FILOSOFIA",
        duration: "3:49",
        collaborations: ["FRANCESCO CHIARI"],
        youtubeId: "xGRnZuzbbSc"
      },
      {
        title: "CHE BELLA PELLE CHE HAI",
        duration: "4:03",
        youtubeId: "5_O6r-Z-3XA"
      },
      {
        title: "COLPA MIA",
        duration: "3:20",
        youtubeId: "4mjxue7Qb00"
      },
      {
        title: "TANTO NON FA RUMORE",
        duration: "3:49",
        youtubeId: "MgaUTr10cCA"
      },
      {
        title: "BLU",
        duration: "5:30",
        youtubeId: "Y65Eg1DbSsk"
      }
    ]
  }
];

export interface Video {
  title: string;
  id: string; // YouTube ID
  thumbnail?: string;
}

export const videos: Video[] = [
  {
    title: "LA FILOSOFIA",
    id: "xGRnZuzbbSc"
  },
  {
    title: "CHE BELLA PELLE CHE HAI",
    id: "5_O6r-Z-3XA"
  },
  {
    title: "TANTO NON FA RUMORE",
    id: "MgaUTr10cCA"
  }
];

export interface Reel {
  title: string;
  id: string; // Instagram Reel ID
}

export const reels: Reel[] = [
  {
    title: "Instagram Reel 1",
    id: "DPq3GPJDXdv"
  },
  {
    title: "Instagram Reel 2",
    id: "DO360rHjZGf"
  }
];

export interface TourDate {
  date: string;
  venue: string;
  city: string;
  ticketLink?: string;
}

export const tourDates: TourDate[] = [
  // Example data - user can update this
  // {
  //   date: "15 LUG 2025",
  //   venue: "Blue Note",
  //   city: "Milano",
  //   ticketLink: "https://ticketlink..."
  // }
];
