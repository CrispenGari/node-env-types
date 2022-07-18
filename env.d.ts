
  // types for your environmental variables
  declare namespace NodeJS {
    export interface ProcessEnv {
      USERNAME : string;
			PASSWORD : string;
			ACCESS_TOKEN : string;
			SIMPLE : string;
			INTERPOLATED : string;
			NON_INTERPOLATED : string;
			numbers : string;
			MULTILINE : string;

    }
  }
  