export interface Nickname {
  name: string;
  tagline: string;
}

export function nicknameFor(score: number): Nickname {
  if (score >= 9.5) {
    return {
      name: "CryptoSaint",
      tagline: "Pure as digital gold"
    };
  } else if (score >= 9) {
    return {
      name: "Blockchain Guardian",
      tagline: "Trustworthy and secure"
    };
  } else if (score >= 8.5) {
    return {
      name: "DeFi Virtuoso",
      tagline: "Master of decentralized finance"
    };
  } else if (score >= 8) {
    return {
      name: "Smart Contract Sage",
      tagline: "Wisdom in every transaction"
    };
  } else if (score >= 7.5) {
    return {
      name: "Crypto Explorer",
      tagline: "Navigating the blockchain frontier"
    };
  } else if (score >= 7) {
    return {
      name: "Digital Nomad",
      tagline: "Wandering the crypto landscape"
    };
  } else if (score >= 6.5) {
    return {
      name: "Blockchain Builder",
      tagline: "Constructing the future"
    };
  } else if (score >= 6) {
    return {
      name: "Crypto Enthusiast",
      tagline: "Passionate about decentralization"
    };
  } else if (score >= 5.5) {
    return {
      name: "Token Trader",
      tagline: "Riding the market waves"
    };
  } else if (score >= 5) {
    return {
      name: "Gas Optimizer",
      tagline: "Efficiency is key"
    };
  } else if (score >= 4.5) {
    return {
      name: "Transaction Tamer",
      tagline: "Mastering the art of transfers"
    };
  } else if (score >= 4) {
    return {
      name: "Wallet Warrior",
      tagline: "Battling for better UX"
    };
  } else if (score >= 3.5) {
    return {
      name: "Blockchain Beginner",
      tagline: "Learning the ropes"
    };
  } else if (score >= 3) {
    return {
      name: "Crypto Curious",
      tagline: "Exploring new possibilities"
    };
  } else if (score >= 2.5) {
    return {
      name: "Digital Dabbler",
      tagline: "Testing the waters"
    };
  } else if (score >= 2) {
    return {
      name: "Gas Killer",
      tagline: "Optimizing every transaction"
    };
  } else {
    return {
      name: "Crypto Newbie",
      tagline: "Starting the journey"
    };
  }
}
