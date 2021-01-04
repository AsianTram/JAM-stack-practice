import makeFAIcon from "utils/makeFAIcon";

import {
  faPhone,
  faEnvelope,
  faPlus,
  faBars,
  faTimes,
  faGlobe,
  faQuoteLeft,
  faQuoteRight
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";

export const PhoneIcon = makeFAIcon(faPhone);
export const EnvelopIcon = makeFAIcon(faEnvelope);
export const PlusIcon = makeFAIcon(faPlus);
export const BarsIcon = makeFAIcon(faBars);
export const QuoteLeftIcon = makeFAIcon(faQuoteLeft);
export const QuoteRightIcon = makeFAIcon(faQuoteRight);
export const GithubIcon = makeFAIcon(faGithubAlt);
export const CloseIcon = makeFAIcon(faTimes);
export const LanguageIcon = makeFAIcon(faGlobe);
export const LinkedinIcon = makeFAIcon(faLinkedinIn);


export * from "config/CustomIcons";
