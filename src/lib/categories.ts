export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  featuredTopics: string[];
  color: string;
}

export const categories: Category[] = [
  {
    slug: 'web-development',
    name: 'Web Development',
    description: 'Modern web development techniques, frameworks, and best practices',
    icon: '🌐',
    color: '#3498db',
    featuredTopics: ['React', 'Vue.js', 'Next.js', 'TypeScript', 'Web Performance']
  },
  {
    slug: 'mobile-development',
    name: 'Mobile Development',
    description: 'Native and cross-platform mobile app development',
    icon: '📱',
    color: '#e74c3c',
    featuredTopics: ['React Native', 'Flutter', 'iOS', 'Android', 'Mobile UI/UX']
  },
  {
    slug: 'devops',
    name: 'DevOps',
    description: 'Modern DevOps practices, tools, and cloud solutions',
    icon: '⚙️',
    color: '#2ecc71',
    featuredTopics: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Monitoring']
  },
  {
    slug: 'artificial-intelligence',
    name: 'Artificial Intelligence',
    description: 'AI/ML concepts, implementations, and applications',
    icon: '🤖',
    color: '#9b59b6',
    featuredTopics: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'AI Ethics']
  },
  {
    slug: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Security best practices, tools, and threat prevention',
    icon: '🔒',
    color: '#f1c40f',
    featuredTopics: ['Web Security', 'Encryption', 'Penetration Testing', 'Security Audits', 'Authentication']
  },
  {
    slug: 'blockchain',
    name: 'Blockchain',
    description: 'Blockchain technology, cryptocurrencies, and Web3',
    icon: '⛓️',
    color: '#1abc9c',
    featuredTopics: ['Smart Contracts', 'DeFi', 'NFTs', 'Ethereum', 'Web3']
  }
];