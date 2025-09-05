export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'team_leader' | 'team_member';
  createdAt: string;
  updatedAt: string;
}

export interface TeamMember extends User {
  teamId: string;
  position: string;
  productivity: number;
  tasksCompleted: number;
}

export interface TeamAnalytics {
  teamId: string;
  teamName: string;
  memberCount: number;
  productivity: {
    daily: number;
    weekly: number;
    monthly: number;
  };
  taskMetrics: {
    completed: number;
    inProgress: number;
    blocked: number;
  };
  topPerformers: TeamMember[];
  bottlenecks: {
    category: string;
    impact: number;
    affectedMembers: string[];
  }[];
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface ApiError {
  message: string;
  code: string;
  status: number;
}