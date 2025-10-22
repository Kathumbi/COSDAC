// src/data/ministries.ts
import { BookOpen, Users, Music, HandHeart, HeartHandshake, Sparkles } from "lucide-react";
import youthImage from "@/assets/ministry-youth.jpg";
import womenImage from "@/assets/ministry-women.jpg";
import stewardshipImage from "@/assets/ministry-stewardship.jpg";
import childrenImage from "@/assets/ministry-children.jpg";
import musicImage from "@/assets/ministry-music.jpg";
import bibleStudyImage from "@/assets/ministry-bible-study.jpg";

export const ministries = [
  {
    name: "Children’s Ministry",
    icon: Sparkles,
    blurb: "Building a Christ-centered foundation for our youngest members.",
    description:
      "The Children’s Ministry focuses on nurturing kids in the love and teachings of Jesus. Through engaging Sabbath School lessons, songs, crafts, and interactive Bible stories, we help children grow in faith and character. We also equip parents and guardians with resources for spiritual parenting.",
    image: childrenImage,
  },
  {
    name: "Young Adults Ministry",
    icon: Users,
    blurb: "Empowering young people to grow in faith, service, and leadership.",
    description:
      "The Youth Ministry exists to inspire and nurture the spiritual, social, and mental growth of young people. Through mentorship, Bible study, community service, and fun fellowship, we help the youth discover their purpose in Christ and become active members of the church and society.",
    image: youthImage,
  },
  {
    name: "Adventist Women’s Ministry",
    icon: HandHeart,
    blurb: "Encouraging women to deepen their faith and impact their families and communities.",
    description:
      "The Women’s Ministry is a vibrant community where women of all ages come together to pray, study the Word, and serve others. We aim to uplift, empower, and equip women to live out their God-given purpose—at home, in the church, and in the world. Our programs include retreats, outreach, and mentorship initiatives.",
    image: womenImage,
  },
  {
    name: "Adventist Men Ministry",
    icon: HeartHandshake,
    blurb: "Promoting faithful management of God’s resources—time, talents, and treasures.",
    description:
      "The Stewardship Ministry helps members recognize that all we have belongs to God. We encourage faithful giving, responsible use of time and talents, and living a life that honors God through integrity, gratitude, and service. Workshops and campaigns remind us that stewardship is a lifestyle, not an event.",
    image: stewardshipImage,
  },
  
];
