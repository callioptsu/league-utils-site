export interface Summoner {
  puuid: string;
  gameName: string;
  tagLine: string;
}

export interface ApiOptions {
  options: string;
  region: string;
  gameName: string;
  tagLine: string;
}

export interface ApiResponse {
  message: string;
  status: number;
  summoner?: Summoner;
}
