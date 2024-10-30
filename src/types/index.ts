export type DecodingDecadeResponse = {
  success: boolean;
  message: string;
};

export type DecodingDecadeImageResponse = {
  success: boolean;
  message: string;
  imageUrl: string;
};

export type JoinTeamResponseI = {
  message: string;
  success: boolean;
  data: {
    success: boolean;
    teamCode: string;
    teamName: string;
  };
};

export type JoinTeamPayload = {
  teamCode: string;
  userData: {
    name: string;
    email: string;
    phone_number: string;
    institution: string;
    address: string;
    social_media: string;
  };
};

export type CreateTeamPayload = {
  teamName: string;
  userData: {
    name: string;
    email: string;
    phone_number: string;
    institution: string;
    address: string;
    social_media: string;
  };
};

export type CreateTeamResponseI = {
  message: string;
  success: boolean;
  data: {
    teamCode: string;
  };
};

export type TeamMemberI = {
  player_id: number;
  name: string;
  email: string;
  phone_number: string
  institution: string
  address: string
  social_media: string
};

export type TeamStatusResponseI = {
  message: string;
  success: boolean;
  data: {
    teamName: string;
    memberCount: number;
    members: {
      player1: TeamMemberI | string;
      player2: TeamMemberI | string;
      player3: TeamMemberI | string;
    };
  };
};

export interface BaseErrorResponse {
  success: false;
  message: string;
}

export interface ValidationErrorResponse extends BaseErrorResponse {
  errors: Record<string, string>;
}