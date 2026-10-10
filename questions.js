window.PRINCE2_QUESTIONS = [
  {
    domain: "Agile mindset", topic: "Being agile vs doing agile", type: "standard",
    prompt: "Which statement best describes “being agile”?",
    options: ["Strictly following Scrum ceremonies", "Adopting agile values, behaviours, and adaptability", "Replacing all project governance", "Delivering without planning"],
    answer: [1], explanation: "“Being agile” concerns mindset, values, and behaviours; “doing agile” means applying specific agile practices and techniques.",
    syllabus: "1.1.3–1.1.5"
  },
  {
    domain: "PRINCE2 principles", topic: "Identifying the principles", type: "standard", selectCount: 2,
    prompt: "Which TWO are PRINCE2 principles?",
    options: ["Manage by exception", "Maximize utilization", "Focus on products", "Avoid stakeholder engagement"],
    answer: [0, 2], explanation: "“Manage by exception” and “Focus on products” are PRINCE2 principles.",
    syllabus: "1.3.4"
  },
  {
    domain: "Agile mindset", topic: "Being agile vs doing agile", type: "scenario",
    prompt: "A project manager notices that the team holds daily stand-ups, but team members rarely raise problems or adjust their work when priorities change. The manager wants the team to become more agile, not merely perform agile ceremonies. Which action best supports that goal?",
    options: ["Require the team to follow a stricter stand-up script", "Encourage openness, collaboration, and adaptation when new information arises", "Add more mandatory ceremonies", "Ask the team to avoid changing agreed work"],
    answer: [1], explanation: "This is about agile behaviours and values, rather than simply carrying out agile practices."
  },
  {
    domain: "Agile mindset", topic: "Agile approaches and techniques", type: "standard",
    prompt: "Which statement best distinguishes an agile approach from an agile technique?",
    options: ["An approach is a way of working; a technique is a specific method used within that way of working", "An approach is a project role; a technique is a governance decision", "An approach is a product description; a technique is a business case", "An approach is a stage boundary; a technique is an exception plan"],
    answer: [0], explanation: "An agile approach provides an overall way of working, while techniques are specific methods that can support delivery."
  },
  {
    domain: "Agile mindset", topic: "Agile Onion", type: "scenario",
    prompt: "An agile coach is helping a team understand the Agile Onion. The team has discussed its chosen tools, but the coach wants to draw attention to the deeper elements that should guide how those tools are used. Which elements are at the heart of the Agile Onion?",
    options: ["Tools and techniques", "Practices and processes", "Values and principles", "Plans and controls"],
    answer: [2], explanation: "In the Agile Onion, values and principles are at the core; practices and tools sit further out."
  },
  {
    domain: "Agile mindset", topic: "Agile approaches", type: "standard",
    prompt: "Which statement about agile approaches is most appropriate?",
    options: ["Only one agile approach can be used on a project", "An approach should be selected and tailored to suit the project context", "An agile approach removes the need for project governance", "Every agile team must use identical practices"],
    answer: [1], explanation: "Agile approaches and practices should be chosen and tailored to the project context."
  },
  {
    domain: "Agile mindset", topic: "Selecting an agile approach", type: "scenario",
    prompt: "A supplier team has a steady flow of small support requests, and stakeholders want to see work moving through delivery regularly. The project manager wants an approach that helps visualize workflow and limit work in progress. Which approach is the best fit?",
    options: ["Kanban", "A fixed sequence of detailed stage plans with no reprioritization", "A one-time requirements sign-off followed by no stakeholder review", "A project approach that prohibits visual workflow management"],
    answer: [0], explanation: "Kanban uses a visual workflow and work-in-progress limits to help manage a flow of work."
  },
  {
    domain: "Agile mindset", topic: "Adapting agile techniques", type: "scenario",
    prompt: "A delivery team’s daily stand-up has become a long status meeting, and team members are not using it to coordinate their work. The project manager wants to preserve the purpose of the technique while improving its use. What should the project manager encourage?",
    options: ["Use the meeting for brief coordination, surfacing obstacles, and planning immediate work", "Require detailed reports on every completed task", "Cancel all collaboration until the next stage boundary", "Use the meeting to approve changes to the business case"],
    answer: [0], explanation: "An agile technique should serve its purpose and be adapted when it is not helping the team collaborate."
  },
  {
    domain: "PRINCE2 principles", topic: "Continued business justification", type: "standard",
    prompt: "What does the PRINCE2 principle of continued business justification require?",
    options: ["A valid business reason for the project to be started and to continue", "A fixed scope that cannot change", "All project decisions to be made by the delivery team", "Every stage to produce the same number of products"],
    answer: [0], explanation: "The project must remain justified in terms of its business reason and expected value."
  },
  {
    domain: "PRINCE2 principles", topic: "Manage by exception", type: "scenario",
    prompt: "A project board agrees tolerances for a stage’s time, cost, scope, and quality. Later, the project manager forecasts that the stage will exceed its agreed time tolerance. What should the project manager do?",
    options: ["Continue without informing anyone until the stage ends", "Escalate the forecast exception to the project board", "Change the tolerance without approval", "Ask the team to remove quality checks to protect the schedule"],
    answer: [1], explanation: "Under “Manage by exception,” a forecast breach of tolerance is escalated to the appropriate level."
  },
  {
    domain: "PRINCE2 principles", topic: "Tailor to suit the project", type: "standard",
    prompt: "What is the purpose of tailoring PRINCE2?",
    options: ["To adapt the method to the project’s context while retaining appropriate control", "To remove all management products", "To ensure every project uses exactly the same processes", "To transfer accountability for the project to the supplier"],
    answer: [0], explanation: "PRINCE2 is tailored to suit the project, its environment, scale, complexity, and delivery approach."
  },
  {
    domain: "PRINCE2 practices", topic: "Plans practice", type: "scenario",
    prompt: "A project manager is planning an agile delivery stage. The team can estimate near-term work in detail, but estimates for later work are less certain. Which planning approach best fits the situation?",
    options: ["Plan the near-term work in more detail and keep later plans at an appropriate level", "Require detailed estimates for every task before the project starts", "Avoid planning because the project uses agile delivery", "Replace the stage plan with a list of unprioritized ideas"],
    answer: [0], explanation: "Plans should be appropriate to the level of certainty; agile planning can be refined as more is learned."
  },
  {
    domain: "PRINCE2 practices", topic: "Business case practice", type: "standard",
    prompt: "Which management product explains why the project is worthwhile and provides the basis for continued justification?",
    options: ["Business case", "Daily stand-up notes", "Team board", "Product backlog"],
    answer: [0], explanation: "The business case documents the project’s justification and supports decisions about whether it should continue."
  },
  {
    domain: "PRINCE2 roles", topic: "Project Executive", type: "scenario",
    prompt: "A project board is reviewing whether the project remains worthwhile after a change in expected benefits. One board member is accountable for ensuring that the business case is justified. Which role holds that accountability?",
    options: ["Project Executive", "Team Manager", "Project Support", "Agile coach"],
    answer: [0], explanation: "The Project Executive is accountable for the project’s business justification."
  },
  {
    domain: "PRINCE2 roles", topic: "Project Manager", type: "standard",
    prompt: "Which responsibility is primarily associated with the Project Manager?",
    options: ["Managing the project’s day-to-day work within the authority delegated by the project board", "Personally creating every product", "Approving every team-level technical decision", "Representing only the supplier’s interests"],
    answer: [0], explanation: "The Project Manager manages day-to-day project activity within delegated tolerances and authority."
  },
  {
    domain: "PRINCE2 roles", topic: "Team Manager and delivery responsibilities", type: "scenario",
    prompt: "A project manager has agreed a work package with an agile delivery team. The team needs to organize its work and deliver the assigned products to the agreed requirements. Which role is primarily responsible for managing that delivery?",
    options: ["Team Manager", "Project Executive", "Project Board", "Senior User"],
    answer: [0], explanation: "The Team Manager is responsible for managing the delivery of the agreed products within the work package."
  },
  {
    domain: "PRINCE2 artifacts", topic: "Product descriptions", type: "standard",
    prompt: "What is the main purpose of a product description?",
    options: ["To define a product’s purpose, composition, quality criteria, and quality method", "To record every risk raised during the project", "To replace the project business case", "To list only the names of the delivery team"],
    answer: [0], explanation: "A product description defines what a product is and how its quality will be assessed."
  },
  {
    domain: "PRINCE2 artifacts", topic: "Work packages", type: "scenario",
    prompt: "A project manager is authorizing a team to deliver a set of products during a stage. The team needs to understand the products, constraints, reporting arrangements, and acceptance expectations. Which management product should the project manager use to authorize and define this work?",
    options: ["Work package", "Benefits management approach", "Project brief", "Lessons log"],
    answer: [0], explanation: "A work package provides the authority and agreed details for a defined set of work."
  },
  {
    domain: "PRINCE2 principles", topic: "Learn from experience", type: "standard",
    prompt: "Which action best demonstrates the principle “Learn from experience”?",
    options: ["Seeking, recording, and applying lessons throughout the project", "Waiting until project closure to discuss lessons", "Repeating the same approach regardless of results", "Recording only lessons that confirm the original plan"],
    answer: [0], explanation: "Lessons should be sought, recorded, and applied throughout the project, not only at the end."
  },
  {
    domain: "PRINCE2 practices", topic: "Organizing practice and agile roles", type: "scenario",
    prompt: "A product owner and a project manager are both involved in a project. Team members are unsure who sets product priorities and who manages the project within board-approved tolerances. What should the project manager do first?",
    options: ["Clarify and communicate the roles, responsibilities, and decision rights", "Ask the team to choose whichever person it prefers", "Remove the project board from the project", "Let the supplier make all project decisions"],
    answer: [0], explanation: "Clear roles and responsibilities help avoid gaps or conflicts in decision-making in an agile context."
  },
  {
    domain: "PRINCE2 processes", topic: "Starting up a project", type: "standard",
    prompt: "What is a key purpose of the Starting up a Project process?",
    options: ["To check whether the project is worthwhile and viable before committing to initiation", "To deliver all project products", "To authorize every work package", "To confirm that project benefits have been realized"],
    answer: [0], explanation: "Starting up a Project establishes whether there is a sound basis for initiating the project."
  },
  {
    domain: "PRINCE2 processes", topic: "Initiating a project", type: "scenario",
    prompt: "A project has been approved to move beyond its start-up work. Before delivery begins, the project manager needs to establish how the project will be controlled, planned, and managed. Which process provides the main opportunity to do this?",
    options: ["Initiating a Project", "Closing a Project", "Managing Product Delivery", "Directing a Project"],
    answer: [0], explanation: "Initiating a Project establishes the project’s management approaches and plans before delivery is authorized."
  },
  {
    domain: "PRINCE2 processes", topic: "Directing a project", type: "standard",
    prompt: "Which process enables the project board to provide overall direction and make key project decisions?",
    options: ["Directing a Project", "Controlling a Stage", "Managing Product Delivery", "Closing a Project"],
    answer: [0], explanation: "Directing a Project is the project board’s process for directing the project."
  },
  {
    domain: "PRINCE2 processes", topic: "Managing Product Delivery", type: "scenario",
    prompt: "A delivery team has accepted a work package and is coordinating its tasks, checking the quality of its products, and reporting progress to the project manager. Which process most directly covers this work?",
    options: ["Managing Product Delivery", "Managing a Stage Boundary", "Starting up a Project", "Directing a Project"],
    answer: [0], explanation: "Managing Product Delivery controls the link between the project manager and the team responsible for delivering products."
  },
  {
    domain: "PRINCE2 processes", topic: "Controlling a Stage", type: "standard",
    prompt: "Which process is primarily concerned with the project manager’s day-to-day management of a stage?",
    options: ["Controlling a Stage", "Closing a Project", "Starting up a Project", "Directing a Project"],
    answer: [0], explanation: "Controlling a Stage covers the project manager’s monitoring and control of a stage."
  },
  {
    domain: "PRINCE2 processes", topic: "Managing a Stage Boundary", type: "scenario",
    prompt: "A stage is nearing completion, and the project board needs information to decide whether to authorize the next stage. The project manager prepares a report on the current stage and an updated plan for the next one. Which process applies?",
    options: ["Managing a Stage Boundary", "Managing Product Delivery", "Starting up a Project", "Closing a Project"],
    answer: [0], explanation: "Managing a Stage Boundary prepares the information needed to review the stage and plan the next stage."
  },
  {
    domain: "PRINCE2 processes", topic: "Closing a project", type: "standard",
    prompt: "What is a key purpose of Closing a Project?",
    options: ["To confirm acceptance of the project’s products and bring the project to an orderly close", "To authorize the first stage", "To create the initial project mandate", "To manage the daily work of a delivery team"],
    answer: [0], explanation: "Closing a Project confirms completion or early closure, including product acceptance and handover arrangements."
  },
  {
    domain: "PRINCE2 processes", topic: "Workshops", type: "scenario",
    prompt: "A project manager brings users, the product owner, and the delivery team together to clarify a product’s acceptance criteria. Participants need to share their understanding and agree what “done” means. What is the main benefit of using a facilitated workshop here?",
    options: ["It enables structured collaboration and shared understanding", "It transfers project accountability to the workshop facilitator", "It replaces the need for product quality criteria", "It guarantees that no future change will be required"],
    answer: [0], explanation: "Workshops support collaborative discussion and alignment; they do not replace accountability or agreed controls."
  },
  {
    domain: "PRINCE2 practices", topic: "Risk practice", type: "standard",
    prompt: "What is a risk in PRINCE2?",
    options: ["An uncertain event or set of events that could affect objectives", "A confirmed problem that has already occurred", "A product that has failed acceptance", "A tolerance approved by the project board"],
    answer: [0], explanation: "A risk is uncertain; if it occurs, it may affect objectives positively or negatively."
  },
  {
    domain: "PRINCE2 practices", topic: "Issue and change control", type: "scenario",
    prompt: "A stakeholder requests a change to a product after the team has begun delivery. The request may affect scope and time, so the project manager needs it assessed and handled according to the agreed controls. What should the project manager do?",
    options: ["Record and assess the request using the project’s issue and change control arrangements", "Accept it immediately without assessing its impact", "Ask the team to implement it without informing anyone", "Reject it automatically because delivery has started"],
    answer: [0], explanation: "A change request should be recorded, assessed, and handled using the agreed issue and change control approach."
  },
  {
    domain: "PRINCE2 practices", topic: "Quality practice", type: "standard",
    prompt: "What is the main purpose of quality criteria for a product?",
    options: ["To define measurable characteristics that the product must meet", "To state why the project is justified", "To identify who may authorize the project", "To record the project’s expected financial benefits"],
    answer: [0], explanation: "Quality criteria make product expectations clear and provide a basis for checking whether a product is acceptable."
  },
  {
    domain: "PRINCE2 practices", topic: "Progress and exception reporting", type: "scenario",
    prompt: "During a stage, the project manager forecasts that an agreed tolerance will be exceeded. The delivery team has also identified a possible response, but the project manager cannot resolve the forecast breach within delegated authority. What is the appropriate next step?",
    options: ["Escalate the forecast exception to the project board with the relevant information", "Wait until the stage ends to report the breach", "Change the tolerance without authorization", "Stop reporting progress until the team has a solution"],
    answer: [0], explanation: "A forecast tolerance breach should be escalated so the project board can decide how to proceed."
  },
  {
    domain: "PRINCE2 practices", topic: "Progress practice", type: "standard",
    prompt: "What is the primary purpose of a checkpoint report?",
    options: ["To provide regular progress information from a team to the project manager", "To authorize the project on behalf of the project board", "To describe the project’s long-term benefits", "To record the final acceptance of all project products"],
    answer: [0], explanation: "A checkpoint report is a team-level progress report to the project manager."
  },
  {
    domain: "PRINCE2 principles", topic: "Governance and tolerances", type: "standard",
    prompt: "What is the purpose of setting tolerances?",
    options: ["To define delegated limits within which management can act without escalation", "To prevent all changes to the project", "To give the delivery team authority to alter the business case", "To replace progress reporting"],
    answer: [0], explanation: "Tolerances provide agreed limits for delegated management and support management by exception."
  },
  {
    domain: "Wider context", topic: "Product management", type: "standard",
    prompt: "Which activity is most closely associated with product management in an agile context?",
    options: ["Understanding product value and helping maintain and prioritize product work", "Approving every project tolerance", "Managing the project board’s meetings", "Replacing the need for project justification"],
    answer: [0], explanation: "Product management focuses on product value and direction, including prioritizing product work."
  },
  {
    domain: "Wider context", topic: "Operations and transition", type: "scenario",
    prompt: "A delivery team has completed a product, but users will need support and operational staff must be ready to use it. The project manager wants to avoid treating product delivery as the only remaining concern. What should the project consider?",
    options: ["The product’s transition, handover, and ongoing operational needs", "Removing operational staff from acceptance discussions", "Ending all communication once development is complete", "Replacing the business case with a team task list"],
    answer: [0], explanation: "Products need to be transitioned and supported so they can be used and operated effectively."
  },
  {
    domain: "Wider context", topic: "Continuous delivery", type: "standard",
    prompt: "What is a potential benefit of continuous delivery?",
    options: ["Making completed changes available for release more frequently, subject to appropriate controls", "Removing the need to test changes", "Releasing every change whether or not it meets quality expectations", "Avoiding feedback from users"],
    answer: [0], explanation: "Continuous delivery supports frequent, reliable delivery while retaining appropriate quality and release controls."
  },
  {
    domain: "Wider context", topic: "AI support", type: "standard",
    prompt: "When using AI to support project work, what is the most appropriate approach?",
    options: ["Treat AI output as support that needs human review and appropriate governance", "Accept AI-generated decisions without review", "Use AI to take over project accountability", "Allow AI output to bypass quality and information controls"],
    answer: [0], explanation: "AI may support project work, but accountability, review, and appropriate controls remain important."
  },
  {
    domain: "Wider context", topic: "AI support and governance", type: "scenario",
    prompt: "An agile team uses an AI assistant to draft acceptance criteria from stakeholder notes. The criteria will guide product testing and acceptance. What should the product owner do before the team relies on them?",
    options: ["Review them with relevant stakeholders and confirm they accurately express the product needs", "Accept them because the AI generated them quickly", "Use them without review if they are detailed", "Ask the AI to approve the finished product"],
    answer: [0], explanation: "AI-generated material should be reviewed by people who can verify its accuracy and suitability."
  },
  {
    domain: "Wider context", topic: "Product and project outcomes", type: "standard",
    prompt: "Which statement best distinguishes a product from a project outcome?",
    options: ["A product is an output created or changed; an outcome is the result of using that output", "A product is always a benefit; an outcome is always a project role", "A product is a project process; an outcome is a quality method", "A product is a tolerance; an outcome is a plan"],
    answer: [0], explanation: "Products are outputs; outcomes are the effects or results achieved through their use."
  },
  {
    domain: "PRINCE2 principles", topic: "Fitting PRINCE2 principles to agile", type: "scenario",
    prompt: "A product owner reprioritizes work after user feedback, and the project manager checks whether the project still supports its intended business outcome. The delivery approach is changing, but the project needs to remain worthwhile. Which PRINCE2 principle is being applied?",
    options: ["Continued business justification", "Focus on products", "Learn from experience", "Manage by stages"],
    answer: [0], explanation: "Continued business justification means regularly checking that the project remains desirable, viable, and achievable as circumstances change."
  },
  {
    domain: "PRINCE2 practices", topic: "Fitting PRINCE2 themes to agile", type: "standard",
    prompt: "When fitting PRINCE2 management practices to an agile context, what is the best approach?",
    options: ["Keep appropriate management control and tailor how it is applied to support iterative delivery", "Remove management practices because an agile team is self-organizing", "Use the practices only at project closure", "Apply each practice exactly the same way on every project"],
    answer: [0], explanation: "PRINCE2 is tailored to the project context; agile delivery changes how controls are applied, not the need for suitable management."
  },
  {
    domain: "Agile planning", topic: "Five targets to flex", type: "scenario",
    prompt: "A team has a fixed release date and budget, while stakeholder needs are still being refined. The project manager wants to protect quality and deliver the most valuable work possible by the date. Which target is most appropriate to flex?",
    options: ["Scope", "Time", "Quality", "Cost"],
    answer: [0], explanation: "In a timeboxed agile delivery, scope can be prioritized and flexed to protect the agreed time, cost, and quality targets."
  },
  {
    domain: "Agile frameworks", topic: "DSDM", type: "standard",
    prompt: "Which statement best describes DSDM in an agile project context?",
    options: ["It is an agile project delivery approach that uses active user involvement and timeboxing", "It is a project board role that approves all product backlog items", "It is a technique for eliminating project governance", "It is a testing standard that replaces acceptance criteria"],
    answer: [0], explanation: "DSDM is an agile approach that emphasizes active user involvement, timeboxing, and controlled delivery."
  },
  {
    domain: "Agile frameworks", topic: "Lean Startup and MVPs", type: "scenario",
    prompt: "A team is uncertain whether customers will use a proposed service. Instead of building every planned feature, the product owner proposes a small version that can test the key assumption and gather feedback. Which concept best describes this?",
    options: ["A minimum viable product used in a build-measure-learn cycle", "A final product description used to prevent future changes", "A stage boundary used to authorize the project", "A work package used to transfer business ownership"],
    answer: [0], explanation: "A minimum viable product supports the Lean Startup build-measure-learn cycle by testing assumptions with a limited product."
  },
  {
    domain: "Agile suitability", topic: "Agilometer", type: "scenario",
    prompt: "Before agreeing how much agile delivery to use, an agile coach reviews factors such as team experience, stakeholder engagement, and the ability to work iteratively. The coach records the assessment to help the project understand its suitability and risks. Which tool is being used?",
    options: ["Agilometer", "Issue register", "Product backlog", "Benefits management approach"],
    answer: [0], explanation: "The Agilometer assesses the project environment's suitability for agile and helps identify areas that may need attention."
  },
  {
    domain: "Agile behaviours", topic: "Transparency and collaboration", type: "scenario",
    prompt: "A delivery team discovers that a feature is behind schedule, but its progress board still shows it as on track. The team corrects the board and raises the blocker with the project manager and product owner. Which agile behaviour is most clearly demonstrated?",
    options: ["Transparency", "Maximizing individual utilization", "Avoiding stakeholder feedback", "Deferring all decisions to project closure"],
    answer: [0], explanation: "Making real progress and impediments visible is transparency, enabling timely collaboration and decisions."
  },
  {
    domain: "Roles and responsibilities", topic: "Agile roles within PRINCE2 governance", type: "scenario",
    prompt: "A Scrum Master helps the team improve its way of working, while the product owner orders product backlog items by value. The project board retains project-level direction, and the project manager manages the project within delegated authority. Which statement best describes these responsibilities?",
    options: ["Agile roles work alongside PRINCE2 governance, with responsibilities made clear and coordinated", "The Scrum Master replaces the project board", "The product owner takes over all project management accountability", "The project manager must personally prioritize every backlog item"],
    answer: [0], explanation: "Agile and PRINCE2 roles can coexist; their accountabilities and decision rights should be clear and aligned."
  },
  {
    domain: "PRINCE2 processes", topic: "Fitting processes to iterative delivery", type: "standard",
    prompt: "How should PRINCE2 processes be treated when a project delivers products iteratively?",
    options: ["Tailor and apply the processes so project direction and control work with iterative delivery", "Replace every process with a daily stand-up", "Run all processes only after the product is complete", "Let the delivery team assume every project board responsibility"],
    answer: [0], explanation: "The PRINCE2 processes can be tailored to work with an agile delivery approach while retaining suitable governance."
  },
  {
    domain: "Agile frameworks", topic: "Scrum and Kanban", type: "standard",
    prompt: "Which comparison between Scrum and Kanban is most accurate?",
    options: ["Scrum organizes work into timeboxed sprints; Kanban visualizes flow and can limit work in progress", "Scrum is a PRINCE2 process; Kanban is a project board role", "Both require every item to be planned in full before delivery starts", "Kanban requires fixed-length sprints, while Scrum has no defined events"],
    answer: [0], explanation: "Scrum uses timeboxed sprints and defined accountabilities and events; Kanban focuses on visualizing and managing flow."
  },
  {
    domain: "PRINCE2 artifacts", topic: "Product backlog", type: "standard",
    prompt: "What is the product backlog primarily used for in an agile delivery context?",
    options: ["Maintaining and ordering potential product work for future delivery", "Recording only completed products at project closure", "Replacing the project business case and stage plans", "Setting project board tolerances"],
    answer: [0], explanation: "A product backlog is an ordered list of product work that can be refined and selected for delivery."
  },
  {
    domain: "PRINCE2 Agile guidance", topic: "Framework-neutral delivery", type: "scenario",
    prompt: "A project uses PRINCE2 governance and an agile delivery approach that is not Scrum. A stakeholder says the project cannot be agile without Scrum. What is the best response?",
    options: ["PRINCE2 Agile can work with different agile ways of working, tailored to the project context", "The project must switch to Scrum before any product work continues", "The project should remove PRINCE2 governance to use another framework", "Only the project board can choose the team's daily techniques"],
    answer: [0], explanation: "PRINCE2 Agile is not limited to Scrum; the delivery approach should fit the project while suitable PRINCE2 governance remains in place."
  },
  {
    domain: "Agile quality", topic: "Protecting quality", type: "scenario",
    prompt: "As a deadline approaches, a stakeholder asks the team to skip agreed testing so that every planned feature can be included. The project manager wants to meet the date without undermining the product. What is the best response?",
    options: ["Protect the agreed quality criteria and reprioritize or reduce scope if needed", "Skip testing and rely on users to report defects after release", "Extend the deadline without assessing or reporting the impact", "Mark all features complete regardless of their quality"],
    answer: [0], explanation: "Protecting quality helps ensure each delivered product is usable; scope can be prioritized to work within the agreed constraints."
  },
  {
    domain: "Agile behaviours", topic: "Stable delivery teams", type: "standard",
    prompt: "Why can keeping an agile delivery team stable be beneficial?",
    options: ["The team can maintain its working relationships and avoid repeated ramp-up costs", "It prevents stakeholders from giving feedback", "It guarantees that the project scope will never change", "It removes the need to monitor delivery progress"],
    answer: [0], explanation: "Stable teams preserve collaboration and reduce the overhead of repeatedly introducing and onboarding team members."
  },
  {
    domain: "PRINCE2 practices", topic: "Business case flexibility", type: "scenario",
    prompt: "A project is delivering an early product increment to test whether it can achieve a key benefit. The product owner expects feedback to change which features are most valuable. What should the project manager ensure about the business case?",
    options: ["It explains the justification and expected benefits while allowing appropriate flexibility in how the product is delivered", "It guarantees that every original feature will be delivered unchanged", "It assigns responsibility for project benefits to the supplier alone", "It is replaced by the product backlog once delivery begins"],
    answer: [0], explanation: "The business case remains the basis for justification while delivery details can be adapted as evidence and priorities evolve."
  },
  {
    domain: "Agile suitability", topic: "Interpreting Agilometer assessments", type: "standard",
    prompt: "What is a sound way to interpret Agilometer focus-area assessments?",
    options: ["Review the focus areas individually to identify strengths and areas needing action", "Treat one overall average as a complete measure of agile suitability", "Assume every project must achieve the same score before starting", "Use the assessment to replace risk management"],
    answer: [0], explanation: "The focus areas provide distinct information; reviewing them individually helps identify specific suitability risks and actions."
  },
  {
    domain: "Agile techniques", topic: "Information radiators", type: "standard",
    prompt: "What is the purpose of an information radiator in an agile environment?",
    options: ["To make useful information about progress, work, or impediments visible to people nearby", "To restrict project information to the project board", "To calculate the project's business benefits", "To replace all conversations between the team and stakeholders"],
    answer: [0], explanation: "Information radiators make relevant work information visible and support shared awareness and discussion."
  },
  {
    domain: "PRINCE2 principles", topic: "Focus on products", type: "standard",
    prompt: "How does the PRINCE2 principle “Focus on products” help an agile team?",
    options: ["It keeps attention on agreed product outcomes and quality expectations while the team adapts its delivery", "It requires every task to be specified in detail before the project starts", "It prevents the product owner from reprioritizing work", "It makes the delivery team responsible for approving the business case"],
    answer: [0], explanation: "A product focus clarifies what must be delivered and its quality expectations, while leaving room to adapt how the work is completed."
  },
  {
    domain: "PRINCE2 principles", topic: "Defined roles and responsibilities", type: "scenario",
    prompt: "A team is unsure whether the product owner can approve project-stage changes or whether that decision belongs to the project board. The project manager clarifies decision rights and how product ownership interacts with project governance. Which PRINCE2 principle is being applied?",
    options: ["Defined roles and responsibilities", "Manage by stages", "Learn from experience", "Focus on products"],
    answer: [0], explanation: "Defining roles and responsibilities makes accountabilities and decision rights clear, including how agile roles fit into the PRINCE2 project structure."
  },
  {
    domain: "PRINCE2 principles", topic: "Manage by stages", type: "scenario",
    prompt: "A project delivers through short iterations, but the project board still needs agreed points to review viability and authorize further project work. The project manager organizes delivery within stages and presents information at each boundary. Which principle is being applied?",
    options: ["Manage by stages", "Tailor to suit the project", "Focus on products", "Learn from experience"],
    answer: [0], explanation: "Managing by stages provides project-level control points; iterative delivery can take place within those stages."
  },
  {
    domain: "PRINCE2 principles", topic: "Continued business justification", type: "standard",
    prompt: "Which question best supports the principle of continued business justification during agile delivery?",
    options: ["Does the project still provide a worthwhile reason to continue?", "Has every original task been completed in its original order?", "Has the team avoided all changes to the product?", "Has the project board assigned every development task?"],
    answer: [0], explanation: "Continued business justification requires the project to remain worthwhile as circumstances, costs, risks, and expected benefits evolve."
  },
  {
    domain: "PRINCE2 principles", topic: "Learn from experience", type: "scenario",
    prompt: "A team finds that stakeholder feedback arrives too late to influence its work. It records this lesson and changes its review approach for the next delivery cycle. Which PRINCE2 principle is most directly demonstrated?",
    options: ["Learn from experience", "Manage by exception", "Continued business justification", "Defined roles and responsibilities"],
    answer: [0], explanation: "The team applies learning from experience by capturing a lesson and using it to improve future work."
  },
  {
    domain: "PRINCE2 principles", topic: "Tailor to suit the project", type: "standard",
    prompt: "What should be considered when tailoring PRINCE2 for an agile project?",
    options: ["The project context, scale, complexity, and chosen delivery approach", "Only the preferences of the delivery team", "A requirement to remove project-board oversight", "A rule that every agile project use the same controls"],
    answer: [0], explanation: "Tailoring adapts the method to the project's context while retaining appropriate governance and control."
  },
  {
    domain: "PRINCE2 principles", topic: "Manage by exception", type: "standard",
    prompt: "When does the principle “Manage by exception” require escalation?",
    options: ["When a forecast shows an agreed tolerance is likely to be exceeded", "Whenever a team member completes a task", "Whenever the product owner reorders backlog items within authority", "Only after the project has closed"],
    answer: [0], explanation: "A forecast tolerance breach is escalated to the level with authority to decide what happens next."
  },
  {
    domain: "PRINCE2 principles", topic: "Focus on products", type: "scenario",
    prompt: "Before a team starts an increment, users and the product owner clarify the product's purpose and agree how its quality will be checked. The team then chooses how to build it. Which principle is most directly applied?",
    options: ["Focus on products", "Manage by stages", "Manage by exception", "Continued business justification"],
    answer: [0], explanation: "Focusing on products clarifies what is to be delivered and the quality expectations before work is undertaken."
  },
  {
    domain: "PRINCE2 principles", topic: "Applying principles together", type: "standard",
    prompt: "Which statement about the PRINCE2 principles is correct?",
    options: ["They are guiding obligations that should be applied together when using PRINCE2", "They are optional techniques selected only by the delivery team", "They are project roles that can be replaced by agile ceremonies", "They apply only during project initiation"],
    answer: [0], explanation: "The principles guide how PRINCE2 is applied throughout the project and work together as the foundation of the method."
  },
  {
    domain: "PRINCE2 principles", topic: "Principles and agile delivery", type: "scenario",
    prompt: "A project uses a Kanban board to manage delivery, but the project manager also checks continued justification, escalates forecast tolerance breaches, and clarifies accountabilities. What does this demonstrate?",
    options: ["Agile techniques can be used while applying PRINCE2 principles", "Using Kanban means PRINCE2 principles no longer apply", "Only the delivery team is responsible for project governance", "PRINCE2 principles apply only when Scrum is used"],
    answer: [0], explanation: "Agile delivery techniques and PRINCE2 principles can be used together when the method is appropriately tailored."
  },
  {
    domain: "PRINCE2 principles", topic: "Management by stages and iteration", type: "standard",
    prompt: "How can iterative delivery and the PRINCE2 principle “Manage by stages” work together?",
    options: ["Iterations can be planned and delivered within a stage, with the stage boundary supporting project-level review", "Each iteration must replace the project board", "A project using iterations cannot have stage plans", "Stage boundaries are used to approve individual team tasks"],
    answer: [0], explanation: "Iterations structure product delivery; stages provide project-level management and decision points."
  },
  {
    domain: "PRINCE2 principles", topic: "Roles and agile accountabilities", type: "scenario",
    prompt: "A product owner prioritizes product work, while the project executive remains accountable for the business case and the project manager controls the project within delegated authority. A stakeholder suggests that the product owner should replace all three roles. What is the best response?",
    options: ["Keep accountabilities clear and map agile responsibilities alongside the PRINCE2 roles", "Combine all accountabilities automatically in the product owner", "Remove the project executive because the team is agile", "Let the supplier decide which project roles are needed"],
    answer: [0], explanation: "Defined roles and responsibilities remain important; agile roles should be integrated without obscuring PRINCE2 accountabilities."
  },
  {
    domain: "PRINCE2 principles", topic: "Tailor to suit the project", type: "scenario",
    prompt: "A small project uses short delivery iterations, and its project manager proposes simpler reporting than a large, complex project would need. The board checks that essential decision-making and control remain in place. Which principle guides this adaptation?",
    options: ["Tailor to suit the project", "Manage by exception", "Focus on products", "Learn from experience"],
    answer: [0], explanation: "Tailor to suit the project means adapting PRINCE2 to the project's context, size, complexity, and delivery approach while retaining appropriate control."
  },
  {
    domain: "PRINCE2 roles", topic: "Project Executive", type: "standard",
    prompt: "Which PRINCE2 role is ultimately accountable for ensuring that the project remains justified and that its objectives are met?",
    options: ["Project Executive", "Team Manager", "Project Support", "Scrum Master"],
    answer: [0], explanation: "The Project Executive has overall accountability for the project and its continued business justification."
  },
  {
    domain: "PRINCE2 roles", topic: "Senior User", type: "standard",
    prompt: "Which responsibility is primarily associated with the Senior User?",
    options: ["Representing the interests of those who will use the products and realize the benefits", "Managing the supplier's technical staff", "Producing the team's daily task estimates", "Providing independent project assurance on behalf of the board"],
    answer: [0], explanation: "The Senior User represents user needs and is accountable for ensuring the expected user benefits are specified and realized."
  },
  {
    domain: "PRINCE2 roles", topic: "Senior Supplier", type: "standard",
    prompt: "What is the primary contribution of the Senior Supplier on the project board?",
    options: ["Representing the interests and capabilities of those designing, developing, and delivering the products", "Owning the project's business case", "Representing all end users and benefits", "Managing project-board meetings and tolerances"],
    answer: [0], explanation: "The Senior Supplier represents the supplier side and ensures the project has access to the resources and expertise needed to deliver."
  },
  {
    domain: "PRINCE2 roles", topic: "Project Manager", type: "standard",
    prompt: "Within PRINCE2, who is responsible for the day-to-day management of the project within delegated authority?",
    options: ["Project Manager", "Project Executive", "Senior User", "Project Assurance"],
    answer: [0], explanation: "The Project Manager manages day-to-day project work and keeps it within the authority delegated by the project board."
  },
  {
    domain: "PRINCE2 roles", topic: "Team Manager", type: "standard",
    prompt: "Which responsibility is primarily assigned to the Team Manager?",
    options: ["Managing the delivery of products agreed in a work package", "Authorizing the project on behalf of the board", "Owning the business justification", "Approving all project-level exceptions"],
    answer: [0], explanation: "The Team Manager coordinates delivery of the products in an authorized work package and reports progress to the Project Manager."
  },
  {
    domain: "PRINCE2 roles", topic: "Project Assurance", type: "standard",
    prompt: "What is the purpose of Project Assurance?",
    options: ["To provide the project board with confidence that the project is being conducted properly", "To take over day-to-day management from the Project Manager", "To build every product on the team's behalf", "To prioritize all product backlog items"],
    answer: [0], explanation: "Project Assurance gives the project board independent confidence that the project remains well managed and aligned with its interests."
  },
  {
    domain: "PRINCE2 roles", topic: "Project Support", type: "standard",
    prompt: "Which activity is a typical responsibility of Project Support?",
    options: ["Providing administrative services and maintaining project records or tools", "Accepting the business case on behalf of the Project Executive", "Directing the project on behalf of the board", "Defining user benefits as the Senior User"],
    answer: [0], explanation: "Project Support provides administrative assistance and may maintain project management records, configuration items, and tools."
  },
  {
    domain: "PRINCE2 roles", topic: "Project Executive and business case", type: "scenario",
    prompt: "New information suggests that the expected benefits may no longer justify the project's cost. The project board needs someone accountable for reviewing the business justification and recommending whether the project should continue. Which role has this accountability?",
    options: ["Project Executive", "Team Manager", "Project Support", "Scrum Master"],
    answer: [0], explanation: "The Project Executive is accountable for the business case and continued justification of the project."
  },
  {
    domain: "PRINCE2 roles", topic: "Senior User and acceptance", type: "scenario",
    prompt: "A user group disagrees about whether a new product increment will meet its needs. The project board needs the user perspective represented and user acceptance expectations clarified. Which role should lead that representation?",
    options: ["Senior User", "Senior Supplier", "Project Support", "Team Manager"],
    answer: [0], explanation: "The Senior User represents the interests of users and helps ensure their requirements and acceptance needs are understood."
  },
  {
    domain: "PRINCE2 roles", topic: "Senior Supplier and delivery capability", type: "scenario",
    prompt: "A proposed product needs specialist supplier expertise, but the project board is unsure whether the delivery approach is feasible. Which role should represent supplier capability and advise on the resources and expertise needed?",
    options: ["Senior Supplier", "Senior User", "Project Executive", "Project Assurance"],
    answer: [0], explanation: "The Senior Supplier represents those responsible for supplying the project's products and advises on delivery capability and resources."
  },
  {
    domain: "PRINCE2 roles", topic: "Project Manager and escalation", type: "scenario",
    prompt: "A project manager forecasts that a stage will exceed its agreed time tolerance. The manager records the forecast and prepares an exception report for the project board. Which role is carrying out this day-to-day management and escalation?",
    options: ["Project Manager", "Senior User", "Project Support", "Team Manager"],
    answer: [0], explanation: "The Project Manager monitors the project against tolerances and escalates a forecast exception to the project board."
  },
  {
    domain: "PRINCE2 roles", topic: "Team Manager and work packages", type: "scenario",
    prompt: "An agile delivery team has accepted a work package and organizes its tasks to deliver the agreed products. Progress and any delivery concerns must be reported to the Project Manager. Which role is most directly responsible for managing this team delivery?",
    options: ["Team Manager", "Project Executive", "Senior User", "Project Assurance"],
    answer: [0], explanation: "The Team Manager manages the team's delivery of the products in the work package and communicates progress to the Project Manager."
  },
  {
    domain: "PRINCE2 roles", topic: "Project Assurance and independence", type: "scenario",
    prompt: "The project board wants confidence that quality and business interests are being monitored, but it does not want the Project Manager to assure their own management. What arrangement best supports this?",
    options: ["Assign suitable Project Assurance responsibilities on behalf of the project board", "Ask the delivery team to approve its own project tolerances", "Transfer all assurance to Project Support", "Ask the supplier to decide whether the business case remains valid"],
    answer: [0], explanation: "Project Assurance provides the project board with confidence and should be assigned so the relevant board interests are appropriately represented."
  },
  {
    domain: "PRINCE2 roles", topic: "Project Support services", type: "scenario",
    prompt: "The project manager needs help maintaining configuration records, organizing project information, and administering project tools. Which role or function can provide this support?",
    options: ["Project Support", "Senior User", "Project Executive", "Change Authority"],
    answer: [0], explanation: "Project Support may provide administrative services and maintain project records, configuration information, and tools."
  },
  {
    domain: "PRINCE2 roles", topic: "Project Board representation", type: "standard",
    prompt: "Which three interests are represented on the PRINCE2 project board?",
    options: ["Business, user, and supplier", "Project Support, Project Assurance, and Scrum Master", "Project Manager, Team Manager, and Product Owner", "Quality, risk, and communication"],
    answer: [0], explanation: "The project board brings together business, user, and supplier interests through the Executive, Senior User, and Senior Supplier roles."
  },
  {
    domain: "PRINCE2 roles", topic: "Project Board direction", type: "standard",
    prompt: "Who provides overall direction and makes key decisions for the project on behalf of the project board?",
    options: ["The project board", "The Team Manager alone", "Project Support", "The agile coach"],
    answer: [0], explanation: "The project board directs the project, makes key decisions, and delegates day-to-day management to the Project Manager."
  },
  {
    domain: "PRINCE2 roles", topic: "Agile roles and PRINCE2 accountability", type: "scenario",
    prompt: "A product owner orders backlog items, while the project manager controls the project within delegated tolerances and the project board retains overall direction. A team member says that having a product owner makes the PRINCE2 roles unnecessary. What should the project manager explain?",
    options: ["The roles can work together, but their responsibilities and decision rights must remain clear", "The product owner automatically replaces the project board", "The project manager must transfer all accountability to the product owner", "The agile delivery approach prevents the use of PRINCE2 roles"],
    answer: [0], explanation: "Agile roles can complement PRINCE2 roles; the project should define how responsibilities and authority fit together."
  },
  {
    domain: "Agile prioritization", topic: "MoSCoW prioritization", type: "scenario",
    prompt: "A product owner and stakeholders have more requested features than the team can deliver in the next timebox. They classify each requirement by whether it is essential, important, desirable, or out of scope for now. Which technique are they applying?",
    options: ["MoSCoW prioritization", "A product audit", "A stage boundary review", "A risk probability assessment"],
    answer: [0], explanation: "MoSCoW prioritizes requirements as Must have, Should have, Could have, or Won’t have this time."
  },
  {
    domain: "Agile planning", topic: "Five targets", type: "standard",
    prompt: "Which set lists the five targets considered when balancing constraints in PRINCE2 Agile?",
    options: ["Time, cost, quality, scope, and benefits", "People, risk, communication, procurement, and change", "Stages, teams, products, roles, and reports", "Value, flow, velocity, effort, and capacity"],
    answer: [0], explanation: "The five targets are time, cost, quality, scope, and benefits; the project determines how these are balanced and managed."
  },
  {
    domain: "Agile planning", topic: "Iterative planning", type: "scenario",
    prompt: "A team understands the next delivery period well but has limited information about later work. The project manager wants useful forecasts without pretending that uncertain details are known. What is the best planning response?",
    options: ["Plan near-term work in detail and refine later plans as information improves", "Freeze detailed task estimates for the entire project immediately", "Stop maintaining project plans until the product is complete", "Let each team member create an unrelated plan"],
    answer: [0], explanation: "Iterative and rolling-wave planning uses detail appropriate to current knowledge and refines plans as uncertainty reduces."
  },
  {
    domain: "Agile roles", topic: "Scrum Master responsibilities", type: "standard",
    prompt: "Which responsibility is most closely associated with the Scrum Master?",
    options: ["Helping the Scrum team work effectively and supporting removal of impediments", "Owning the project business case", "Authorizing project stages on behalf of the board", "Accepting every product on behalf of users"],
    answer: [0], explanation: "The Scrum Master supports the Scrum team and helps it use Scrum effectively; this does not replace PRINCE2 project governance."
  },
  {
    domain: "Agile behaviours", topic: "Retrospectives and learning", type: "scenario",
    prompt: "After an increment, the team discusses what helped delivery, what caused friction, and one change to try in the next iteration. The agile coach encourages the team to turn the discussion into an action. Which technique and behaviour does this illustrate?",
    options: ["A retrospective that supports learning and continuous improvement", "A stage boundary used to authorize the project", "A product description used to define the business case", "A checkpoint report used to approve scope changes"],
    answer: [0], explanation: "A retrospective helps a team learn from experience and adapt its way of working."
  },
  {
    domain: "Agile frameworks", topic: "Lean Startup learning cycle", type: "standard",
    prompt: "In the Lean Startup build-measure-learn cycle, what should a team do after measuring how users respond to an experiment?",
    options: ["Use the evidence to learn and decide what to adapt or test next", "Continue building the original idea regardless of results", "Close the project automatically", "Replace stakeholder feedback with a fixed scope baseline"],
    answer: [0], explanation: "The cycle uses evidence from measurement to learn and inform the next product decision or experiment."
  },
  {
    domain: "Agile product management", topic: "Backlog ordering", type: "standard",
    prompt: "When ordering a product backlog, what should the product owner primarily consider?",
    options: ["The relative value, importance, and needs of stakeholders and users", "The order in which requests were received, without review", "Which work is easiest for the team regardless of value", "The project manager’s personal preference"],
    answer: [0], explanation: "Backlog ordering should reflect product value and stakeholder or user needs, informed by relevant constraints and evidence."
  },
  {
    domain: "Agile quality", topic: "Acceptance criteria", type: "scenario",
    prompt: "A delivered increment does not meet an agreed acceptance criterion. The supplier suggests changing the criterion after the test to mark the work complete. What should the project manager encourage?",
    options: ["Record the shortfall and address it through the agreed quality and change arrangements", "Change the criterion retrospectively without agreement", "Accept the product because the team completed its tasks", "Remove the criterion from all future product descriptions"],
    answer: [0], explanation: "Products should be assessed against agreed quality expectations; changes to those expectations need appropriate agreement and control."
  },
  {
    domain: "PRINCE2 practices", topic: "Progress practice in agile delivery", type: "standard",
    prompt: "How can progress be made visible in an agile delivery environment while retaining PRINCE2 control?",
    options: ["Use suitable team-level information and regular reporting to inform project-level monitoring and decisions", "Use only informal conversation and stop reporting to the project manager", "Allow the team to change project tolerances without escalation", "Wait until project closure to compare actual progress with plans"],
    answer: [0], explanation: "Agile progress information can support regular monitoring and escalation within PRINCE2 governance arrangements."
  },
  {
    domain: "Agile mindset", topic: "Adaptability", type: "scenario",
    prompt: "A team receives user feedback that changes which feature will provide the most value. The project manager helps the product owner and team review the new information and adjust upcoming work within agreed controls. Which agile behaviour is best demonstrated?",
    options: ["Adapting to change based on feedback", "Protecting the original task order regardless of evidence", "Removing project controls", "Waiting until project closure to consult users"],
    answer: [0], explanation: "Agility means responding constructively to useful feedback while continuing to work within appropriate project controls."
  },
  {
    domain: "Agile mindset", topic: "Self-organizing teams", type: "scenario",
    prompt: "A delivery team is given a clear goal, product priorities, and agreed constraints. Team members decide how to organize their work and coordinate tasks without waiting for the project manager to assign every activity. Which agile characteristic does this show?",
    options: ["Self-organization within agreed boundaries", "The removal of all management accountability", "A transfer of project-board authority to the team", "A fixed plan that prevents team decisions"],
    answer: [0], explanation: "Self-organizing teams decide how to accomplish their work while remaining accountable for agreed outcomes and respecting project constraints."
  },
  {
    domain: "Agile mindset", topic: "Rich communication", type: "scenario",
    prompt: "A supplier and users have different interpretations of a new requirement, and written messages have not resolved the misunderstanding. The agile coach brings them together for a focused conversation and checks that they share the same understanding. Which behaviour is being applied?",
    options: ["Rich, direct communication to build shared understanding", "Reducing stakeholder contact until delivery is complete", "Escalating every discussion to the project board", "Replacing collaboration with more detailed status reports"],
    answer: [0], explanation: "Direct, rich communication can quickly resolve ambiguity and build shared understanding among the people involved."
  },
  {
    domain: "Agile mindset", topic: "Agile Onion", type: "standard",
    prompt: "In the Agile Onion, which layer sits immediately outside values?",
    options: ["Principles", "Tools", "Roles", "Management products"],
    answer: [0], explanation: "The Agile Onion places principles around the core values, with practices and tools further out."
  },
  {
    domain: "Agile mindset", topic: "Continuous adaptation", type: "standard",
    prompt: "Which statement best describes an agile mindset?",
    options: ["Learn from feedback and adapt the approach to deliver value", "Follow the initial plan exactly, even when assumptions change", "Avoid involving users until the product is finished", "Treat every change as a failure of planning"],
    answer: [0], explanation: "An agile mindset emphasizes learning, collaboration, and adapting to change in pursuit of valuable outcomes."
  },
  {
    domain: "Agile mindset", topic: "Customer collaboration", type: "scenario",
    prompt: "Users can review working product increments throughout delivery, but the supplier proposes postponing all user contact until final acceptance. The product owner wants to reduce the risk of building the wrong thing. What should the product owner encourage?",
    options: ["Regular user collaboration and feedback during delivery", "Avoiding user feedback to preserve the original specification", "Replacing product reviews with internal status reports", "Deferring every product decision to project closure"],
    answer: [0], explanation: "Frequent collaboration and feedback help the team validate its understanding and adapt the product as it is developed."
  },
  {
    domain: "Agile mindset", topic: "Being agile vs doing agile", type: "standard",
    prompt: "A team uses an agile board and holds regular stand-ups. What would best show that it is also “being agile”?",
    options: ["It uses openness and collaboration to adapt its work when new information emerges", "It follows every ceremony even when the ceremony provides no value", "It avoids discussing delivery problems with stakeholders", "It treats the board as a substitute for a shared team conversation"],
    answer: [0], explanation: "Agile tools and ceremonies are practices; being agile is reflected in the values and behaviours used to guide decisions."
  },
  {
    domain: "Agile mindset", topic: "Inspect and adapt", type: "scenario",
    prompt: "After several iterations, a team sees that its current way of coordinating work is causing delays. The team reviews what is happening and agrees to try a different working practice in the next iteration. What is the team demonstrating?",
    options: ["Inspecting its experience and adapting its way of working", "Changing the project business case without approval", "Avoiding lessons to protect the current method", "Replacing product acceptance with team preference"],
    answer: [0], explanation: "Agile teams use experience and feedback to inspect results and adapt their practices."
  },
  {
    domain: "Agile mindset", topic: "Transparency", type: "standard",
    prompt: "Why is transparency important in an agile team?",
    options: ["It makes progress, problems, and decisions visible so people can respond together", "It guarantees that no risks will occur", "It removes the need for communication with stakeholders", "It allows the team to bypass agreed reporting and governance"],
    answer: [0], explanation: "Transparency supports shared awareness, timely discussion, and informed decisions."
  },
  {
    domain: "Agile mindset", topic: "Responding to change", type: "scenario",
    prompt: "A new regulation changes a product requirement during delivery. The team identifies the impact and works with the product owner and project manager to agree the appropriate next steps. Which response best fits an agile mindset?",
    options: ["Assess and respond to the change through collaboration and suitable controls", "Ignore the regulation until all planned features are complete", "Allow the team to change project tolerances without agreement", "Assume the original requirement can never be revised"],
    answer: [0], explanation: "An agile mindset responds to relevant change collaboratively without discarding appropriate governance."
  },
  {
    domain: "Agile mindset", topic: "Learning from feedback", type: "standard",
    prompt: "What is a useful purpose of delivering work in small increments?",
    options: ["To obtain feedback and learn sooner, so future work can be adjusted", "To avoid defining quality expectations", "To guarantee that the original scope cannot change", "To postpone stakeholder involvement until the end"],
    answer: [0], explanation: "Small increments enable earlier review and feedback, helping inform subsequent delivery decisions."
  },
  {
    domain: "Agile mindset", topic: "Psychological safety and openness", type: "scenario",
    prompt: "Team members have stopped mentioning mistakes because they fear being blamed. The agile coach invites the team to discuss obstacles respectfully and focus on learning and improvement. Which behaviour is the coach encouraging?",
    options: ["Openness and a learning-focused response to problems", "Concealing issues until they become exceptions", "Assigning blame before understanding the cause", "Avoiding collaboration with the project manager"],
    answer: [0], explanation: "Openness helps teams surface problems early and learn from them rather than hide issues."
  },
  {
    domain: "Agile mindset", topic: "Agile governance", type: "standard",
    prompt: "Which statement best describes the relationship between an agile mindset and project governance?",
    options: ["Agile values can be applied while retaining governance tailored to the project", "Agile working requires removing project governance", "Governance requires teams to avoid feedback and reprioritization", "Only the project board can use agile behaviours"],
    answer: [0], explanation: "Agility and governance are compatible; PRINCE2 controls can be tailored to support iterative, adaptive delivery."
  }
];
