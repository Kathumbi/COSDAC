export const ministries = [
  {
    name: "Children's Ministry",
    blurb: "Building a Christ-centered foundation for our youngest members.",
    description: "The Children's Ministry focuses on nurturing kids in the love and teachings of Jesus through engaging activities, Bible stories, and fun learning experiences. We provide a safe and welcoming environment where children can grow in their relationship with God and build lasting friendships.",
    images: [
      "/ImageUploads/ministries/ChildrenMinistry/Children1.jpg",
      "/ImageUploads/ministries/ChildrenMinistry/Children2.jpg",
      "/ImageUploads/ministries/ChildrenMinistry/Children3.jpg",
    ],
    resources: [
      { title: "More Resources", url: "https://children.adventist.org/" },
      { title: "Activity Sheets", url: "https://children.adventist.org/resources/" }
    ],
  },
  {
    name: "Young Adults Ministry",
    blurb: "Empowering young people to grow in faith, service, and leadership.",
    description: "The Young Adults Ministry exists to inspire and nurture the spiritual, social, and mental growth of our youth. We provide a platform for young people to connect, serve, and develop their God-given talents through various programs, retreats, and community outreach activities.",
    images: [
      "/ImageUploads/ministries/YoungAdultsMinistry/Youth1.jpg",
      "/ImageUploads/ministries/YoungAdultsMinistry/Youth2.jpg",
      "/ImageUploads/ministries/YoungAdultsMinistry/Youth3.jpg",
    ],
    resources: [
      { title: "GC Youth Ministries", url: "https://www.gcyouthministries.org/" },
      { title: "Youth Bible Studies", url: "https://www.adventistyouth.org/" }
    ],
  },
  {
    name: "Women's Ministry",
    blurb: "Encouraging women to deepen their faith and impact their families and communities.",
    description: "The Women's Ministry is a vibrant community where women of all ages come together for fellowship, spiritual growth, and mutual support. Through Bible studies, prayer groups, and outreach programs, we empower women to live out their faith in practical ways and make a difference in their circles of influence.",
    images: [
      "/ImageUploads/ministries/WomensMinistry/Awo1.jpg",
      "/ImageUploads/ministries/WomensMinistry/Awo2.jpg",
      "/ImageUploads/ministries/WomensMinistry/Awo3.jpg",
    ],
    resources: [
      { title: "Adventist Women Ministries", url: "https://women.adventist.org/" },
      { title: "Women's Devotional", url: "https://women.adventist.org/devotionals" }
    ],
  },
  {
    name: "Men's Ministry",
    blurb: "Strengthening men in their spiritual journey and leadership roles.",
    description: "The Men's Ministry helps members recognize that all we have belongs to God and promotes faithful stewardship of time, talents, and treasures. We focus on developing godly character, strong family leadership, and service-oriented hearts through fellowship, accountability, and practical discipleship.",
    images: [
      "/ImageUploads/ministries/MensMinistry/Amo1.jpg",
      "/ImageUploads/ministries/MensMinistry/Amo2.jpg",
      "/ImageUploads/ministries/MensMinistry/Amo3.jpg",
    ],
    resources: [
      {
        title: "Adventist Men Organisation Doc",
        url: "https://www.scribd.com/document/365154829/ADVENTIST-MEN-ORGANISATION-docx",
      },
      { title: "Men's Bible Study", url: "https://www.adventistmen.org/" }
    ],
  },
];

export type Ministry = {
  name: string;
  blurb: string;
  description: string;
  images: string[];
  resources: { title: string; url: string }[];
};