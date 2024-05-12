import { IPremiereItem } from "types";
import { OtherPremiere } from "./OtherPremiere";

interface OtherPremieresListProps {
   otherPremieres: IPremiereItem[];
}
export const OtherPremieresList = ({ otherPremieres }: OtherPremieresListProps) => {
   return otherPremieres.map((premiere) => <OtherPremiere key={premiere.kinopoiskId} premiere={premiere} />);
};
