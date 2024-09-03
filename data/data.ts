import type {
    Achievement1Type,
    AwesomeService1Type,
    BlogArticle1Type,
    ExpertTeam1Type,
    Feature1Type,
    LinkType,
    Pricing1Type,
    RecentProject1Type,
    Social1Type,
    Testimonial1Type,
    WorkingProcess1Type,
} from "~/types/types";

export const feature1: Feature1Type[] = [
    {
        title: "Highly Expert Team",
        description: "We provide the most responsive and functional IT design",
        iconUrl: "/assets/images/iconbox/icon1.svg",
    },
    {
        title: "24/7 Customer Service",
        description: "We provide the most responsive and functional IT design",
        iconUrl: "/assets/images/iconbox/icon2.svg",
    },
    {
        title: "Competitive Pricing",
        description: "We provide the most responsive and functional IT design",
        iconUrl: "/assets/images/iconbox/icon3.svg",
    },
];

export const awesomeService1: AwesomeService1Type[] = [
    {
        iconUrl: "/assets/images/iconbox/icon4.svg",
        title: "Data Tracking <br> Security",
        description: "Developing a comprehensive IT strategy that aligns.",
    },
    {
        iconUrl: "/assets/images/iconbox/icon5.svg",
        title: "IT Management <br> Service",
        description: "Developing a comprehensive IT strategy that aligns.",
    },
    {
        iconUrl: "/assets/images/iconbox/icon6.svg",
        title: "UI/UX & Branding <br> Identity",
        description: "Developing a comprehensive IT strategy that aligns.",
    },
    {
        iconUrl: "/assets/images/iconbox/icon7.svg",
        title: "Web & Mobile App <br> Development",
        description: "Developing a comprehensive IT strategy that aligns.",
    },
    {
        iconUrl: "/assets/images/iconbox/icon8.svg",
        title: "Digital Marketing <br> Services",
        description: "Developing a comprehensive IT strategy that aligns.",
    },
    {
        iconUrl: "/assets/images/iconbox/icon6.svg",
        title: "UI/UX & Branding <br> Identity",
        description: "Developing a comprehensive IT strategy that aligns.",
    },
];

export const recentProject1: RecentProject1Type[] = [
    {
        imgUrl: "/assets/images/p1/p1.png",
        title: "Digital Product Design",
        category: "Design, Graphics",
    },
    {
        imgUrl: "/assets/images/p1/p2.png",
        title: "Cyber Security Analysis",
        category: "Security, Technology",
    },
    {
        imgUrl: "/assets/images/p1/p3.png",
        title: "Health App Development",
        category: "Development, Software",
    },
    {
        imgUrl: "/assets/images/p1/p4.png",
        title: "Marketing Agency Websit",
        category: "Development, Marketing",
    },
    {
        imgUrl: "/assets/images/p1/p5.png",
        title: "Project for Marketing",
        category: "Marketing, Business",
    },
];

export const recentProject2: RecentProject1Type[] = [
    {
        imgUrl: "/assets/images/p2/p1.png",
        title: "Cyber Security Analysis",
        category: "Security, Technology",
    },
    {
        imgUrl: "/assets/images/p2/p2.png",
        title: "Digital Product Design",
        category: "Design, Graphics",
    },
    {
        imgUrl: "/assets/images/p2/p3.png",
        title: "Health App Development",
        category: "Development, Software",
    },
    {
        imgUrl: "/assets/images/p2/p4.png",
        title: "Project for Marketing",
        category: "Marketing, Business",
    },
];

export const expertTeam1: ExpertTeam1Type[] = [
    {
        imgUrl: "/assets/images/team/team1.png",
        name: "Marvin McKinney",
        position: "CEO & Founder",
    },
    {
        imgUrl: "/assets/images/team/team2.png",
        name: "Sophia Rodriguez",
        position: "Creative Director",
    },
    {
        imgUrl: "/assets/images/team/team3.png",
        name: "Marvin McKinney",
        position: "Lead Developer",
    },
    {
        imgUrl: "assets/images/team/team4.png",
        name: "Alexander Cameron",
        position: "Product Designer",
    },
];

export const testimonial1: Testimonial1Type[] = [
    {
        comment:
            "“ Working with several word press themes and templates the last years, I only can say this is best in every level. I use it for my company and the reviews that I have already are all excellent. Not only the design but the code quality ”",
        name: "Brooklyn Simmons",
        position: "Lead Developer",
        star: 5,
    },
    {
        comment:
            "“ Working with several word press themes and templates the last years, I only can say this is best in every level. I use it for my company and the reviews that I have already are all excellent. Not only the design but the code quality ”",
        name: "Alexander Cameron",
        position: "Lead Developer",
        star: 4,
    },
    {
        comment:
            "“ Working with several word press themes and templates the last years, I only can say this is best in every level. I use it for my company and the reviews that I have already are all excellent. Not only the design but the code quality ”",
        name: "Brooklyn Simmons",
        position: "Lead Developer",
        star: 5,
    },
];

export const blogArticle1: BlogArticle1Type[] = [
    {
        imgUrl: "/assets/images/blog/blog6.png",
        title: "Planning your online business goals with a specialist",
        category: "Technology",
    },
    {
        imgUrl: "/assets/images/blog/blog7.png",
        title: "Boost your startup business with our digital agency",
        category: "Design",
    },
    {
        imgUrl: "/assets/images/blog/blog8.png",
        title: "Proactive customer experience in the business",
        category: "Marketing",
    },
];

export const blogArticle2: BlogArticle1Type[] = [
    {
        imgUrl: "/assets/images/blog/blog15.png",
        title: "Boost your startup business with our digital agency",
        category: "Design",
    },
    {
        imgUrl: "/assets/images/blog/blog16.png",
        title: "Planning your online business goals with a specialist",
        category: "Technology",
    },
    {
        imgUrl: "/assets/images/blog/blog17.png",
        title: "Proactive customer experience in the business",
        category: "Marketing",
    },
];

export const social1: Social1Type[] = [
    {
        icon: "ri-facebook-fill",
        url: "https://www.facebook.com/",
    },
    {
        icon: "ri-linkedin-fill",
        url: "https://www.linkedin.com/",
    },
    {
        icon: "ri-twitter-fill",
        url: "https://twitter.com/",
    },
    {
        icon: "ri-instagram-fill",
        url: "https://www.instagram.com/",
    },
];

export const footerQuickLinks: LinkType[] = [
    {
        title: "About Us",
        url: "/about",
    },
    {
        title: "Our Team",
        url: "/team",
    },
    {
        title: "Pricing",
        url: "/pricing",
    },
    {
        title: "Blogs",
        url: "/blog",
    },
    {
        title: "Contact Us",
        url: "/contac",
    },
];

export const footerServiceLinks: LinkType[] = [
    {
        title: "UI/UX Design",
        url: "/",
    },
    {
        title: "App Development",
        url: "/",
    },
    {
        title: "Digital Marketing",
        url: "/",
    },
    {
        title: "Web Development",
        url: "/",
    },
    {
        title: "Cyber Security",
        url: "/",
    },
];

export const footerInfoLinks: LinkType[] = [
    {
        title: "Working Process",
        url: "/",
    },
    {
        title: "Privacy Policy",
        url: "/",
    },
    {
        title: "Terms & Conditions",
        url: "/",
    },
    {
        title: "Faqs",
        url: "/",
    },
];

export const achievement1: Achievement1Type[] = [
    {
        iconUrl: "/assets/images/v2/icon1.svg",
        number: 1800,
        symbol: "+",
        title: "Happy Clients",
    },
    {
        iconUrl: "/assets/images/v2/icon2.svg",
        number: 600,
        symbol: "+",
        title: "Finished Projects",
    },
    {
        iconUrl: "/assets/images/v2/icon3.svg",
        number: 200,
        symbol: "+",
        title: "Skilled Experts",
    },
    {
        iconUrl: "/assets/images/v2/icon4.svg",
        number: 26,
        symbol: "%",
        title: "Clients Satisfaction",
    },
];

export const workingProcess1: WorkingProcess1Type[] = [
    {
        imgUrl: "/assets/images/v2/illustration1.svg",
        title: "Initiation & Planning",
        description:
            "We are architects innovation trailblazers of technological advancement",
    },
    {
        imgUrl: "/assets/images/v2/illustration2.svg",
        title: "Execution & Development",
        description:
            "We are architects innovation trailblazers of technological advancement",
    },
    {
        imgUrl: "/assets/images/v2/illustration3.svg",
        title: "Testing & Maintenance",
        description:
            "We are architects innovation trailblazers of technological advancement",
    },
];

export const prcing1: Pricing1Type[] = [
    {
        plan: "Startup",
        price: 99,
        duration: "month",
    },
    {
        plan: "Business",
        price: 299,
        duration: "month",
    },
    {
        plan: "Enterprise",
        price: 779,
        duration: "month",
    },
];
