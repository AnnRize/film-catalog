// -------------------------- Item --------------------------
export interface IStaff {
   staffId: number;
   nameRu: string;
   nameEn: string;
   description: string;
   posterUrl: string;
   professionText: string;
   professionKey: ProfessionKeyType;
}

// -------------------------- Types --------------------------

export type ProfessionKeyType =
   | "WRITER"
   | "OPERATOR"
   | "EDITOR"
   | "COMPOSER"
   | "PRODUCER_USSR"
   | "TRANSLATOR"
   | "DIRECTOR"
   | "DESIGN"
   | "PRODUCER"
   | "ACTOR"
   | "VOICE_DIRECTOR"
   | "UNKNOWN";
