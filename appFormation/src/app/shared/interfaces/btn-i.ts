import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface BtnI {
  label: string,
  route?: string,
  href?: string,
  action?: boolean,
  icon?: IconDefinition
}
