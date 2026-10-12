import { portfolio } from './profile';

export const profile = { ...portfolio, resume: '/resume.pdf' };
export type Project = {
  id: string; number: string; title: string; subtitle: string; category: 'AI / ML' | 'Software' | 'Experiments';
  visual: 'health' | 'ocean' | 'study' | 'library' | 'audit' | 'fruit' | 'type';
  summary: string; tech: string[]; problem: string; approach: string; contribution: string; result: string;
  note: string; repo?: string; demo?: string; source: string;
};

const original = (id: string) => profile.projects.find(project => project.id === id)!;
const fromOriginal = (id: string, number: string, visual: Project['visual'], subtitle: string): Project => {
  const item = original(id);
  return { ...item, number, visual, subtitle, category: item.category as Project['category'], repo: item.repo || undefined, demo: item.demo || undefined, note: item.notice || '', source: 'Repository source review', contribution: item.contribution || '', problem: item.problem || '', approach: item.approach || '', result: item.result || '' };
};

export const projects: Project[] = [
  { id: 'healthcare', number: '01', title: 'AI Healthcare Assistant', subtitle: 'Less paperwork. More possibility.', category: 'AI / ML', visual: 'health',
    summary: 'Turning spoken notes into structured prescription drafts. An exploration in making everyday clinical workflows less manual.',
    tech: ['Python', 'Flask', 'SQLite', 'Speech-to-text'],
    problem: 'After a consultation, spoken information still has to become written documentation. Re-entering notes, organizing prescription details, and preparing delivery create separate manual steps.',
    approach: 'Turn spoken notes into a structured draft, connect it to the patient record, and prepare it for review and delivery. The clinician remains responsible for reviewing the draft.',
    contribution: 'I integrated spoken input with the Flask backend, connected prescription drafts to SQLite patient records, and added the email-delivery workflow. This brought input, documentation, and delivery into one application.',
    result: 'An AI-assisted application prototype that brings spoken input and prescription documentation into one workflow.',
    note: 'Prototype for exploring documentation workflows. Drafts require professional review. The visual is an interface concept, not a screenshot or evidence of clinical validation.', source: 'Supplied résumé' },
  { id: 'ocean', number: '02', title: 'Ocean Hazard Reporting', subtitle: 'A signal from the shoreline.', category: 'Software', visual: 'ocean',
    summary: 'A crowdsourced reporting platform that connects coastal observations with structured, understandable hazard information.',
    tech: ['Flutter', 'Firebase', 'Text classification'],
    problem: 'People near the coast can describe the same situation in different ways. Collecting those observations is only part of the problem; reports also need a consistent structure so they can be understood and reviewed.',
    approach: 'Give people a mobile reporting flow, store observations in Firebase, and use text classification to help organize descriptions into structured hazard information.',
    contribution: 'I built the Flutter reporting workflow, connected report storage through Firebase, and integrated text classification to interpret submitted descriptions. My work connected a person’s observation to a structured report in the application.',
    result: 'A mobile project exploring crowdsourced hazard reporting and interpretation of submitted reports.',
    note: 'The map and report shown here are illustrative interface concepts, not live hazard data. Deployment and field performance are not independently verified.', source: 'Supplied résumé and design brief' },
  { id: 'study-sync', number: '03', title: 'Study Sync', subtitle: 'Knowledge is better shared.', category: 'Software', visual: 'study',
    summary: 'My first-ever project: a student collaboration platform for sharing notes and keeping useful conversations in one place.',
    tech: ['Python', 'Django', 'Student collaboration'],
    problem: 'Notes and academic conversations often become fragmented across separate channels. A shared student workspace also needs clear access permissions and organized student records.',
    approach: 'Bring study material and communication together in a Python and Django application, with permission management and student records supporting the shared workspace.',
    contribution: 'I worked on access permissions and student-data management: managing who could access or manage parts of the platform and maintaining the student records used by the application.',
    result: 'A student workspace concept for keeping shared notes and related conversations together.',
    note: 'Project scope and personal contribution are self-reported; repository and runtime have not been reviewed. This is an illustrative interface concept.', source: 'Project brief and confirmed contribution' },
  fromOriginal('library', '04', 'library', 'Find the book. Follow the idea.'),
  fromOriginal('ethical-ui-auditor', '05', 'audit', 'Interfaces deserve a second look.'),
];
export const experiments = [fromOriginal('fruitlens', '06', 'fruit', 'Teaching machines to see.'), fromOriginal('typo-corrector', '07', 'type', 'A little more context.')];
export const allProjects = [...projects, ...experiments];
export const links = [
  { name: 'GitHub', url: profile.github },
  { name: 'LinkedIn', url: profile.linkedin },
  { name: 'LeetCode', url: profile.leetcode },
];
