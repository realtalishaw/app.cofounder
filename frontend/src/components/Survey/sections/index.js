import BasicInformation, { questions as BasicInformationQuestions } from './BasicInformation';
import PersonalityTypeAssessment, { questions as PersonalityTypeAssessmentQuestions } from './PersonalityTypeAssessment';
import Skills, { questions as SkillsQuestions } from './Skills';
import Experience, { questions as ExperienceQuestions } from './Experience';
import WorkStyle, { questions as WorkStyleQuestions } from './WorkStyle';
import PersonalityTraits, { questions as PersonalityTraitsQuestions } from './PersonalityTraits';
import ValuesAndVision, { questions as ValuesAndVisionQuestions } from './ValuesAndVision';
import LocationAndAvailability, { questions as LocationAndAvailabilityQuestions } from './LocationAndAvailability';
import FinancialAndLegalMatters, { questions as FinancialAndLegalMattersQuestions } from './FinancialAndLegalMatters';
import ConflictResolution, { questions as CommunicationAndConflictResolutionQuestions } from './CommunicationAndConflictResolution';
import InterpersonalDynamics, { questions as InterpersonalDynamicsQuestions } from './InterpersonalDynamics';
import CoFounderPreferences, { questions as CoFounderPreferencesQuestions } from './CoFounderPreferences';

import {
  InformationCircleIcon,
  ClipboardDocumentListIcon,
  SparklesIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  UserGroupIcon,
  HeartIcon,
  MapPinIcon,
  BanknotesIcon,
  ChatBubbleLeftRightIcon,
  FaceSmileIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'

export const sections = [
  { title: 'Basic Information', component: BasicInformation, questions: BasicInformationQuestions, icon: InformationCircleIcon },
  { title: 'Personality Type Assessment', component: PersonalityTypeAssessment, questions: PersonalityTypeAssessmentQuestions, icon: ClipboardDocumentListIcon },
  { title: 'Skills', component: Skills, questions: SkillsQuestions, icon: SparklesIcon },
  { title: 'Experience', component: Experience, questions: ExperienceQuestions, icon: AcademicCapIcon },
  { title: 'Work Style', component: WorkStyle, questions: WorkStyleQuestions, icon: BriefcaseIcon },
  { title: 'Personality Traits', component: PersonalityTraits, questions: PersonalityTraitsQuestions, icon: UserGroupIcon },
  { title: 'Values & Vision', component: ValuesAndVision, questions: ValuesAndVisionQuestions, icon: HeartIcon },
  { title: 'Location & Availability', component: LocationAndAvailability, questions: LocationAndAvailabilityQuestions, icon: MapPinIcon },
  { title: 'Financial & Legal Matters', component: FinancialAndLegalMatters, questions: FinancialAndLegalMattersQuestions, icon: BanknotesIcon },
  { title: 'Communication & Conflict Resolution', component: ConflictResolution, questions: CommunicationAndConflictResolutionQuestions, icon: ChatBubbleLeftRightIcon },
  { title: 'Interpersonal Dynamics', component: InterpersonalDynamics, questions: InterpersonalDynamicsQuestions, icon: FaceSmileIcon },
  { title: 'Co-founder Preferences', component: CoFounderPreferences, questions: CoFounderPreferencesQuestions, icon: RocketLaunchIcon },
];
