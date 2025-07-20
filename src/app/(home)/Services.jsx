import { ServiceCard } from "@/components/service-card";
import { Card } from "@/components/ui/card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { image_url } from "@/constant/image";

const contents = [
    // for service 1 
    <span className="">
      <p>
        At Bizmate, we believe HR should be a strategic enabler—not just a support function. Our Strategic HR Advisory services help you align your people strategy with your business objectives, ensuring scalability, agility, and sustainable growth.
        <h3 className="font-semibold md:text-[18px] py-2">Our Offerings Include: </h3>
        <ul className="">
          <li>
            <h3 className="font-semibold">HR Diagnostics & Audits</h3>
            <p className="">Identify gaps, inefficiencies, and compliance risks through structured HR health checks.</p>
          </li>
          <li>
            <h3 className="font-semibold">Organization Structure & Role Clarity</h3>
            <p>Design efficient structures with defined roles, reporting lines, and span of control.</p>
          </li>
          <li>
            <h3 className="font-semibold">Policy Design & SOP Frameworks</h3>
            <p>Create robust HR policies, manuals, and SOPs aligned with labor laws and business culture.</p>
          </li>
          <li>
            <h3 className="font-semibold">HR Metrics & Dashboards</h3>
            <p>Set up measurable KPIs and tracking systems for performance, attrition, cost of hire, etc.</p>
          </li>
          <li>
            <h3 className="font-semibold">Strategic Workforce Planning</h3>
            <p>Align manpower planning with growth projections, business cycles, and skill availability.</p>
          </li>
          <li>
            <h3 className="font-semibold">Business-Aligned HR Roadmaps</h3>
            <p>Design people strategies for digital transformation, expansion, or turnaround scenarios.</p>
          </li>
        </ul>
        <h3 className="font-semibold md:text-[20px]">Who It's For:</h3>
        <p>This service is ideal for:</p>
        <ul>
          <li>Growing startups needing HR structure</li>
          <li>MSMEs preparing for scaling or audits</li>
          <li>Enterprises undergoing transformation or M&A</li>
          <li>Promoter-led firms looking for professional HR systems</li>
          <li>Any Corporate where corporate governance is KEY to the business</li>
        </ul>
      </p>
    </span>,

    // for service 2
    <span className="">
      <p>
        At Bizmate, we design and deliver leadership development journeys that go beyond classrooms. Our programs equip your leaders with the mindsets, behaviours, and skills needed to lead teams, drive strategy, and manage change in today&apos;s complex world of work. 
        <h3 className="font-semibold md:text-[18px] py-2">Our Programs Offer: </h3>
        <ul className="">
          <li>
            <h3 className="font-semibold">Customized Leadership Tracks</h3>
            <p className="">Curated for first-time managers, mid-level leaders, and senior executives.</p>
          </li>
          <li>
            <h3 className="font-semibold">Experiential Learning Modules</h3>
            <p>Interactive workshops, simulations, and case-based discussions rooted in real-world challenges.</p>
          </li>
          <li>
            <h3 className="font-semibold">Behavioural Assessments & 360 Feedback</h3>
            <p>Tools to enhance self-awareness and develop personalized growth plans.</p>
          </li>
          <li>
            <h3 className="font-semibold">Coaching-Led Development</h3>
            <p>One-on-one or group coaching integrated into the program for sustained transformation.</p>
          </li>
          <li>
            <h3 className="font-semibold">Business-Aligned Projects</h3>
            <p>Encourage application of learning to real business priorities for visible impact.</p>
          </li>
        </ul>
        <h3 className="font-semibold md:text-[18px]">Who Should Attend?</h3>
        <ul>
          <li>Emerging Leaders</li>
          <li>People Managers</li>
          <li>Department Heads</li>
          <li>High-Potential Talent</li>
        </ul>
        <h3 className="font-semibold md:text-[18px]">Outcome You Can Expect:</h3>
        <ul>
          <li>Stronger strategic thinking and execution</li>
          <li>Confident and adaptive leadership behaviours</li>
          <li>Improved team performance and engagement</li>
          <li>Creation of a robust internal leadership pipeline</li>
        </ul>
      </p>
    </span>,

    // for service 3
    <span className="">
      <p>
        At Bizmate, our Executive Coaching is a confidential, transformational engagement designed for CXOs, senior leaders, founders, and business heads. Through deep inquiry, reflection, and action planning, we help leaders enhance self-awareness, influence, and strategic decision-making—so they lead with vision and authenticity.
        <br />
        <br />
        Led by a certified ICF-PCC coach with 35+ years of HR leadership experience, our coaching supports both personal and professional evolution.
        
        <h3 className="font-semibold md:text-[18px] my-3">Focus Areas Include:</h3>
        <ul>
          <li>Transitioning into senior leadership roles</li>
          <li>Leading through uncertainty or change</li>
          <li>Enhancing executive presence and influence</li>
          <li>Improving decision-making and resilience</li>
          <li>Managing conflict, feedback, and stakeholder alignment</li>
          <li>Navigating founder/CEO dilemmas</li>
        </ul>
        <h3 className="font-semibold md:text-[18px]">Our Coaching Approach:</h3>
        <ul>
          <li>One-on-One Engagements (in-person or virtual)</li>
          <li>Coaching for Impact – measurable shifts in behavior & results</li>
          <li>Grounded in ICF Core Competencies and real-world business insight</li>
        </ul>
        <h3 className="font-semibold md:text-[18px]">Who It's For:</h3>
        <ul>
          <li>Founders & Entrepreneurs</li>
          <li>CXOs and Business Unit Heads</li>
          <li>Senior HR & Functional Leaders</li>
          <li>Successor-ready high potentials</li>
        </ul>
      </p>
    </span>,

    // for service 4
    <span className="">
      <p>
        At Bizmate, we specialize in Non-IT recruitment for industries such as manufacturing, pharma, food, FMCG, textiles, and hospitality. Our approach is built on a deep understanding of functional roles, cultural fit, and strategic business needs—so you get the right talent, not just a quick hire.
        <br/>
        <br/>
        We combine domain expertise, structured sourcing methods, and real-time market intelligence to deliver candidates who contribute from day one.
        
        <h3 className="font-semibold md:text-[18px] py-2">Our Offerings Include: </h3>
        <ul className="">
          <li>
            <h3 className="font-semibold">End-to-End Talent Acquisition</h3>
            <p className="">From job analysis to onboarding — we manage the full hiring lifecycle.</p>
          </li>
          <li>
            <h3 className="font-semibold">Specialist in Non-IT Hiring</h3>
            <p>Focused on technical, frontline, managerial, and leadership roles across key industries.</p>
          </li>
          <li>
            <h3 className="font-semibold">Leadership & CXO Hiring</h3>
            <p>Discreet and strategic hiring for critical business roles.</p>
          </li>
          <li>
            <h3 className="font-semibold">Passive Talent Mapping</h3>
            <p>We don’t just post jobs — we proactively scout the right-fit talent.</p>
          </li>
          <li>
            <h3 className="font-semibold">Faster Turnaround with Quality Focus</h3>
            <p>Reduced hiring time without compromising quality or culture-fit.</p>
          </li>
        </ul>
        <h3 className="font-semibold md:text-[18px]">Roles We Frequently Close:</h3>
        <ul>
          <li>Plant Heads, Production & Maintenance Leaders</li>
          <li>Sales, Supply Chain & Quality Managers</li>
          <li>HR, Finance & Commercial Heads</li>
          <li>Senior Executives and Mid-Level Specialists</li>
        </ul>
        <h3 className="text-blue-500 font-semibold italic md:text-[19px] text-center">"We don’t just fill positions—we align talent with your culture and vision."</h3>
      </p>
    </span>,


  // Service 5 - Staffing Solutions
  <span className="">
    <p>
      At Bizmate, we offer flexible staffing solutions to help you scale operations quickly, manage project spikes, or fill interim roles—without compromising on talent quality.
      Whether you're looking for short-term specialists, long-term temp-to-perm resources, or project-based teams, we ensure the right talent at the right time.
      <br /><br />
      Our vetted talent pool, domain expertise, and quick turnaround help you stay lean, responsive, and competitive.
    </p>
    <h3 className="font-semibold md:text-[18px] py-2">Staffing Models We Offer:</h3>
    <ul>
      <li><strong>Contract Staffing</strong>: Hire talent for defined durations with full compliance and payroll support.</li>
      <li><strong>Temp-to-Perm Hiring</strong>: Evaluate performance before making permanent decisions.</li>
      <li><strong>Third-Party Payroll Support</strong>: Hassle-free workforce deployment with statutory compliance.</li>
      <li><strong>Project-Based Staffing</strong>: Build turnkey teams for specific initiatives or seasonal demand.</li>
      <li><strong>Specialist Staffing</strong> for Manufacturing, Pharma, FMCG & More: From shop floor to support functions—we deliver reliability at scale.</li>
    </ul>
    <h3 className="font-semibold md:text-[18px] py-2">Why Clients Choose Bizmate:</h3>
    <ul>
      <li>Strong candidate pool across Non-IT domains</li>
      <li>Rapid deployment capability</li>
      <li>100% compliance-ready staffing</li>
      <li>Domain-aligned profiles with real-time availability</li>
    </ul>
    <h3 className="font-semibold md:text-[18px] py-2">Use Cases We Support:</h3>
    <ul>
      <li>Plant ramp-ups and greenfield operations</li>
      <li>Product launch or expansion rollouts</li>
      <li>Temporary role backfills (maternity leave, attrition)</li>
      <li>Event-based or contract manufacturing spikes</li>
    </ul>
  </span>,

  // Service 6 - Talent Management
  <span className="">
    <p>
      <strong>Nurture Top Talent. Build a Future-Ready Workforce.</strong><br />
      At Bizmate, we help organizations unlock the full potential of their people through structured and strategic talent management frameworks.
      Our approach integrates performance, potential, and succession into one cohesive talent pipeline—future-proofing your leadership and critical roles.
    </p>
    <h3 className="font-semibold md:text-[18px] py-2">Our Talent Management Solutions Cover:</h3>
    <ul>
      <li><strong>Performance Management Design</strong>: Define, measure, and drive high performance with role-aligned KPIs and feedback loops.</li>
      <li><strong>Hi-Po Identification & Development</strong>: Use data-backed methods to identify high-potential employees and create growth plans.</li>
      <li><strong>Succession Planning & Leadership Pipelines</strong>: Create bench strength for business continuity and internal mobility.</li>
      <li><strong>Competency Frameworks & Role Clarity</strong>: Define success for every role with customized competencies and behavioral indicators.</li>
      <li><strong>Career Pathing & Retention Strategies</strong>: Enhance employee engagement through visible development tracks and recognition frameworks.</li>
    </ul>
    <h3 className="font-semibold md:text-[18px] py-2">Key Tools & Techniques:</h3>
    <ul>
      <li>Talent grids (9-box model)</li>
      <li>Psychometric assessments (where applicable)</li>
      <li>Development centres & 360 feedback</li>
      <li>Individual development plans (IDPs)</li>
      <li>Customised Training Programs</li>
    </ul>
    <p className="pt-2">
      <strong>The Bizmate Advantage:</strong> We blend structure with customization—so your talent framework fits your industry, size, and ambition.
      We deliver customizable modules and flexible delivery schedules delivered by certified corporate trainers.
    </p>
  </span>,

  // Service 7 - Culture & Engagement Consulting
  <span className="">
    <p>
      At Bizmate, we help organizations decode the invisible threads of their culture. Using diagnostics, focus groups, and behavior mapping,
      we design interventions that align values, drive engagement, and unlock performance.
    </p>
    <h3 className="font-semibold md:text-[18px] py-2">Our Solutions Include:</h3>
    <ul>
      <li>Culture Audits & Heatmaps</li>
      <li>Employee Engagement Strategy</li>
      <li>DEI (Diversity, Equity, Inclusion) Facilitation</li>
      <li>Behavioral Change Interventions</li>
      <li>Value Alignment Workshops</li>
      <li>Leadership & Culture Immersion Labs</li>
    </ul>
    <p className="pt-2">
      Whether you're facing change, rapid growth, or morale challenges, we build cultures where people thrive—and business follows.
      Let your culture become your brand from the inside out.
    </p>
  </span>,

  // Service 8 - HSE Services
  <span className="">
    <p>
      At Bizmate, we help organizations embed a culture of safety, compliance, and accountability.
      Our Health, Safety & Environment (HSE) services span across industries—customized to your risk profile, operational complexity, and regulatory requirements.
    </p>
    <h3 className="font-semibold md:text-[18px] py-2">Our Offerings Include:</h3>
    <ul>
      <li>Safety audits and gap assessments</li>
      <li>HSE policy development and implementation</li>
      <li>Regulatory compliance (including Factories Act & OSHA-equivalent norms)</li>
      <li>Incident investigation frameworks</li>
      <li>Awareness and behavioral safety training</li>
      <li>Emergency response planning & drills</li>
    </ul>
    <p className="pt-2">
      Because a safe workplace isn’t optional—it’s foundational.
    </p>
  </span>,

  // Service 9 - Customized Solutions
  <span className="">
    <p>
      No two businesses are alike. That’s why Bizmate crafts bespoke HR strategies tailored to your structure, size, stage, and speed.
      Whether you're a growing startup or a mature enterprise, we build agile HR frameworks that move with you.
    </p>
    <h3 className="font-semibold md:text-[18px] py-2">We Specialize In:</h3>
    <ul>
      <li>Tailor-made HR blueprints for unique business models</li>
      <li>Flexible engagement options (on-demand, retainer, project-based)</li>
      <li>Policy & process redesign</li>
      <li>Founder/CXO enablement support</li>
      <li>Rapid deployment for critical priorities (M&A, expansion, restructuring)</li>
    </ul>
    <h3 className="text-blue-500 font-semibold italic md:text-[19px] text-center py-2">"You share the challenge, we shape the solution—fast, flexible, focused."</h3>
  </span>,

];

const services = [
  {
    title: "Strategic HR Advisory",
    subtitle: "Strategic HR That Moves Your Business Forward",
    description:"Align your HR strategy with business goals through audits, policy frameworks, and scalable solutions tailored to your organization's maturity.",
    image: "/assets/image10.jpeg",
    content: contents[0],
    url:"/services/recruitment"
  },
  {
    title: "Leadership Development Programs",
    subtitle: " Develop Leaders Who Inspire, Execute, and Transform",
    description:"Build next-gen leaders through experiential learning, behavioral assessments, and coaching-led programs grounded in globally recognized methodologies.",
    image: "/assets/image11.jpeg",
    content: contents[1],
    url:"/services/recruitment"
  },
  {
    title: "Executive Coaching",
    subtitle: "Empowering Leaders with Clarity, Confidence, and purpose",
    description:"1:1 coaching for CXOs, founders, and HR leaders to enhance clarity, influence, and resilience. Led by an ICF PCC-certified coach with deep industry insight.",
    image: "/assets/image12.jpeg",
    content: contents[2],
    url:"/services/recruitment"
  },
  {
    title: "Recruitment Solutions",
    subtitle: "Smart Hiring. Stronger Teams. Sustainable Growth.",
    description:"Find the right people, faster. We use structured hiring methods and deep market mapping to ensure your talent pipeline is future-proof.",
    image: "/assets/image7.jpeg",
    content: contents[3],
    url:"/services/recruitment"
  },
  {
    title: "Staffing Solutions",
    subtitle: "Agile Workforce. On-Demand Talent. Zero Compromise.",
    description:"Scale quickly with flexible staffing — contract, temp-to-perm, or turnkey project hires — without compromising on talent quality.",
    image: "/assets/image1.jpeg",
    content: contents[4],
    url:"/services/staffing"
  },
  {
    title: "Talent Management",
    subtitle: "Nurture Top Talent. Build a Future-Ready Workforce.",
    description:"Identify, develop, and retain top performers with performance frameworks, potential mapping, and succession planning designed for long-term growth.",
    image: "/assets/image9.jpeg",
    content: contents[5],
    url:"/services/talent-management"
  },
  {
    title: "Culture & Engagement Consulting",
    subtitle: "Transform Organizational Culture into a Strategic Advantage",
    description:"Create a culture of inclusion, performance, and purpose. Our diagnostics and interventions turn values into visible behaviors.",
    image: "/assets/image8.jpeg",
    content: contents[6],
    url:"/services/hr-consultancy"
  },
  {
    title: "HSE Services",
    subtitle: "Where People Safety Meets Operational Integrity",
    description:"Drive a safety-first culture with tailored Health, Safety & Environment consulting — from risk audits to training rollouts and compliance tools.",
    image: "/assets/hse.jpeg",
    content: contents[7],
    url:"/services/hse"
  },
  {
    title: "Customized Solutions",
    subtitle: "HR that Adapts to You—Not the Other Way Around",
    description:"Whether you're scaling fast or going lean, we design flexible, plug-and-play HR solutions to match your pace and priorities.",
    image: "/assets/customized.jpeg",
    content: contents[8],
    url:"/services/customized-solutions"
  }
]

export function Services() {
    return (
        <section className="my-20 relative" id="services">
        <div className="container mx-auto">
      
          <h2 className="text-2xl md:text-5xl font-bold text-sky-950 text-center z-20">Our Expertise</h2>
          <div className="flex flex-col gap-1 mt-6 mb-4 w-full mx-auto">
            <p className={"font-serif font-semibold tracking-normal text-teal-500 text-lg text-center md:text-3xl" }> From recruitment to leadership coaching,</p>
            <p className={"font-serif font-semibold tracking-normal text-teal-500 text-lg text-center md:text-3xl" }> We design HR solutions that grow with you</p>
          </div>

          <div className="w-full h-0 bg-sky-950 z-20 mt-2 mb-12 md:mb-20" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 md:mx-0 z-20">
            {
              services.map((item, index) => (
                <ServiceCard key={index} 
                  title={item.title} 
                  subtitle={item.subtitle}
                  description={item.description} 
                  image={item.image} 
                  content={item.content}
                  url={item.url}
                />
              ))
            }
          </div>
          
        </div>
      </section>
    )
}