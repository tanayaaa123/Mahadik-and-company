import { Lightbulb, UserRound, Layers, BarChart3, Clock, Flag } from 'lucide-react'

export const CONTACT = {
  phone: '+91 98908 61210',
  tel: 'tel:+919890861210',
  location: 'Maharashtra, India. Meetings in Pune, Satara and online.',
}

/** Add real profile URLs here. Icons only render when a URL is set. */
export const SOCIAL = { linkedin: '', instagram: '' }

export const NAV = [
  { label: 'Startup founder?', foot: 'The Founder’s Roadmap', id: 'roadmap', to: '#/startup-founder' },
  { label: 'Founder stories', id: 'stories', to: '#/founder-stories' },
  { label: 'What are you missing?', id: 'blindspots', to: '#/blind-spots' },
  { label: 'Contact', id: 'contact', to: '#/contact' },
]

/** Journey stages. angle is the position on the orbit; fr is how far the progress arc runs. */
export const STAGES = [
  { name: 'Idea', angle: 185, fr: 0 },
  { name: 'Start', angle: 238, fr: 0.147 },
  { name: 'Build', angle: 302, fr: 0.325 },
  { name: 'Grow', angle: 365, fr: 0.5 },
  { name: 'Stabilize', angle: 412, fr: 0.633 },
  { name: 'Scale', angle: 490, fr: 0.847 },
]

export const SITUATIONS = [
  { Icon: Lightbulb, title: 'An aspiring founder with a startup idea', when: 'sitting on an idea and unsure it’s worth risking your time and savings.', help: 'decide with evidence', detail: 'test the idea, size the opportunity, and leave with a clear go / no-go and a plan.' },
  { Icon: UserRound, title: 'A first-time entrepreneur', when: 'starting your first business and don’t know what to do first.', help: 'start in the right order', detail: 'set up the structure, priorities and first steps so you move with confidence, not guesswork.' },
  { Icon: Layers, title: 'An early-stage startup founder', when: 'growing fast but everything still runs through you and problems keep landing on your desk.', help: 'fix the bottlenecks', detail: 'find what’s actually breaking and get the business running without constant firefighting.' },
  { Icon: BarChart3, title: 'The owner of a growing company', when: 'seeing revenue rise while people, processes and systems fall behind.', help: 'build the systems to scale', detail: 'clear roles, processes and reporting so growth doesn’t turn into chaos.' },
  { Icon: Clock, title: 'A business owner facing a slowdown', when: 'watching sales or margins slip and unable to pin down why.', help: 'find the root cause', detail: 'diagnose what’s going wrong and set a recovery plan that moves performance first.' },
  { Icon: Flag, title: 'A leader of an established company', when: 'facing a big decision such as expansion, restructuring or a new market, where a wrong call is costly.', help: 'decide with confidence', detail: 'independent analysis, clear options and a recommended path.' },
]

export const QUESTIONS = [
  { label: 'The Problem', short: 'Problem', text: 'Who exactly has this problem, and how do you know it’s real?' },
  { label: 'Validation', short: 'Validation', text: 'What proof do you have that people will pay for it?' },
  { label: 'The Market', short: 'Market', text: 'Who solves this today, and why would customers switch to you?' },
  { label: 'The Business Model', short: 'Model', text: 'How do you make money, and does each sale actually leave you a profit?' },
  { label: 'Structure and Compliance', short: 'Structure', text: 'Which entity, registrations and agreements does your business need?' },
  { label: 'Money', short: 'Money', text: 'How much do you need, where will it come from, and how long will it last?' },
  { label: 'First Customers', short: 'Customers', text: 'How will your first 100 customers find you?' },
  { label: 'Team and Systems', short: 'Team', text: 'What will you do yourself, who will you hire, and what needs to be documented?' },
]

export const PROGRESS_MESSAGES = [
  'Tick what you can answer with confidence today.',
  'A start. The unticked ones are where the risk sits.',
  'Half the picture. The gaps are worth a conversation.',
  'Most are covered. Test the last few before you commit money.',
  'Strong position. Check each answer against real evidence.',
]

/** Add real, client-approved stories: { img: '/stories/name.jpg', name: '', role: '', body: '' } */
export const STORIES = []

export const NOTE_RM = '?note=I+went+through+the+Founder%E2%80%99s+Roadmap+and+would+like+to+talk+it+through.'
export const NOTE_STORY = '?situation=other&note=I%E2%80%99d+like+to+share+my+founder+story.+Here+is+what+I%E2%80%99m+building+and+why%3A'
export const SITUATION_IDS = ['idea', 'first-business', 'early-stage', 'growing', 'slowdown', 'decision']

/** [stage, id, intro, [[question, 'tag|tag'], ...]] */
export const ROAD = [
  ['Idea', 'idea', 'Before you build anything, be sure the problem is real and that you are the right person to solve it.', [
    ['Who exactly has this problem, and how do you know it is real?', 'Problem–solution fit|Ideal customer profile (ICP)'],
    ['How are people solving it today, and what does that cost them in time or money?', 'Current alternatives|Pain point'],
    ['Why are you the right person to solve it?', 'Founder–market fit'],
    ['Which assumptions must be true for this idea to work, and which one is the riskiest?', 'Assumptions|Hypothesis'],
    ['If this succeeds, what does the business look like in five years?', 'Vision|Scalability'],
    ['Is this a real business, or a feature or a hobby?', 'Business viability']]],
  ['Validation', 'validation', 'Proof beats opinion. Find out whether people will actually pay, before you spend serious money.', [
    ['What proof do you have that people will pay for it?', 'Validation|Willingness to pay'],
    ['How many potential customers have you spoken to, and what did they actually say?', 'Customer discovery|Interviews'],
    ['What is the smallest version you can build to test this?', 'Minimum viable product (MVP)|Prototype'],
    ['What would make you stop or change direction?', 'Pivot|Kill criteria'],
    ['How will you know you have product–market fit?', 'Product–market fit (PMF)|Retention'],
    ['Who will be your first ten paying customers, by name?', 'Early adopters|Design partners']]],
  ['Market', 'market', 'Know the size of the opportunity, who else is in it, and why a customer would pick you.', [
    ['How big is the market, and how much of it can you realistically reach?', 'TAM|SAM|SOM'],
    ['Who solves this today, and why would customers switch to you?', 'Competitor mapping|Differentiation'],
    ['What can a competitor copy tomorrow, and what can they not?', 'Moat|Defensibility'],
    ['Can you describe what you do in one sentence a customer understands?', 'Positioning|Value proposition'],
    ['Which customer segment will you serve first, and why that one?', 'Segmentation|Beachhead market'],
    ['Which trends or regulations could help or hurt you in the next three years?', 'Market timing|Regulation']]],
  ['Business model', 'business-model', 'Clarity on how money moves through the business, and whether the numbers work.', [
    ['How do you make money?', 'Revenue model'],
    ['Does each sale actually leave you a profit?', 'Unit economics|Gross margin'],
    ['How do you set your price, and how did you decide?', 'Pricing|Value-based pricing'],
    ['What does it cost to win one customer, and how much are they worth over time?', 'Customer acquisition cost (CAC)|Lifetime value (LTV)'],
    ['How long until a customer pays back what it cost to win them?', 'CAC payback'],
    ['Which costs stay fixed, and which grow with every customer?', 'Fixed vs. variable costs|Break-even']]],
  ['Foundation', 'foundation', 'Name, structure, ownership and paperwork. Easy to postpone, expensive to fix later.', [
    ['What will you name the business, and is the name available as a company name, trademark and domain?', 'Brand name|Trademark|Domain'],
    ['Which legal structure fits you (private limited, LLP, partnership or sole proprietorship), and why?', 'Entity structure'],
    ['Which registrations, licences and tax obligations apply to your business?', 'Compliance|GST|Licences'],
    ['Who owns what in the company, and is it written down?', 'Cap table|Equity split'],
    ['What have the co-founders agreed about roles, exits and disagreements?', 'Founders’ agreement|Vesting'],
    ['Who owns the intellectual property, and is it in the company’s name?', 'IP assignment|Trademark|Copyright'],
    ['Which contracts do you need with customers, vendors and employees?', 'Contracts|NDAs|MSAs']]],
  ['Money', 'money', 'How much you need, where it comes from, and how long it lasts.', [
    ['How much money do you need, and what exactly will it be spent on?', 'Funding requirement|Use of funds'],
    ['How long will your current money last?', 'Runway|Burn rate'],
    ['Should you bootstrap, borrow or raise investment, and what does each one cost you?', 'Bootstrapping|Debt vs. equity|Dilution'],
    ['If you raise money, what will investors ask to see?', 'Pitch deck|Financial model|Due diligence'],
    ['How do you keep business money and personal money separate?', 'Bookkeeping|Business bank account'],
    ['Which three financial numbers do you review every month?', 'Cash flow|Revenue|Margin'],
    ['What is your plan if revenue comes in at half of what you expect?', 'Scenario planning|Contingency']]],
  ['First customers', 'first-customers', 'Getting from zero to your first customers, and getting them to stay.', [
    ['How will your first 100 customers find you?', 'Go-to-market|Channels'],
    ['Which channel will you try first, and how will you measure it?', 'Customer acquisition|Experiments'],
    ['What does your sales process look like from first contact to payment?', 'Sales funnel|Conversion rate'],
    ['Why do customers leave, and how will you find out?', 'Churn|Retention'],
    ['What do you want customers to say about you after their first purchase?', 'Customer experience|NPS'],
    ['How will you earn referrals and repeat business?', 'Word of mouth|Referrals']]],
  ['Team and systems', 'team', 'What only you can do, who you hire, and what has to run without you.', [
    ['What will you do yourself, and what will you hand off?', 'Delegation|Founder bandwidth'],
    ['Who is the first person you hire, and what exactly will they own?', 'Hiring|Roles and responsibilities'],
    ['What has to be written down so the business runs without you?', 'SOPs|Documentation'],
    ['How will you know the team is doing well?', 'KPIs|OKRs'],
    ['How will you pay, motivate and keep good people?', 'Compensation|ESOP|Culture'],
    ['Which tools and systems do you need, and which are a distraction?', 'Tech stack|Automation']]],
  ['Growth and scale', 'growth', 'Measuring what matters, finding what breaks, and deciding where the business goes next.', [
    ['Which three numbers tell you whether the business is working?', 'Key metrics|North star metric'],
    ['What breaks first if you grow ten times?', 'Bottlenecks|Scalability'],
    ['Can you grow without your costs growing at the same rate?', 'Operating leverage'],
    ['When will you double down, change direction or stop?', 'Pivot|Decision rules'],
    ['How will you stay in control of the company as it grows and as you raise money?', 'Governance|Board|Dilution'],
    ['What does success look like for you personally, and what would you give up for it?', 'Founder goals|Exit options']]],
]

export const BS_CHECK = [
  ['A', 'One source of truth', 'Is there a single master list of flavours that every page and every image is checked against?'],
  ['B', 'Where images come from', 'Is each image matched to the actual product, or chosen because it is close enough?'],
  ['C', 'Who signs it off', 'Does anyone other than the author compare names with images before approval?'],
  ['D', 'The last look', 'Does someone check the live page after it goes out, as a customer would see it?'],
]
export const BS_RUN = [
  'Does every product name live in one place, with every page reading from it?',
  'Does every image have a named source, and does it match the product exactly?',
  'Does someone other than the author check names against images before sign-off?',
  'Does someone look at the live page on a phone after every change?',
  'Do you re-check one customer-facing page every month?',
]
