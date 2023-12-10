interface Base {
  // Non-empty in API request and response
  id?: string;

  // Non-empty in API response
  versionstamp?: string;

  createdAt: number;
  updatedAt: number;
}

export interface Circle {
  members: CircleMember[];
}

export interface Wish extends Base {
  name: string;
  description: string;
  url: string;
}
export interface CircleMember extends Base {
  name: string;
  wishlist: Wish[];
}
