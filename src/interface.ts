export interface Label {
  name: string;
}

export interface PrVars {
  prNumber: number;
  prUrl: string;
  releaseType: string;
  releasePrefix: string;
  releaseSuffix: string;
  prComment: boolean;
  noReleaseLabel: string;
}

export interface CreateReleaseParams {
  nextVersion: string;
  prVars: PrVars;
}