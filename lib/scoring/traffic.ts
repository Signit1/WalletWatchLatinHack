export type Traffic = "green" | "yellow" | "red";

export function trafficStatus({ score, hasSanction }: { score: number; hasSanction: boolean }): Traffic {
  // Hard rule: if there are sanctions, always red
  if (hasSanction) {
    return "red";
  }
  
  // Score-based traffic light
  if (score >= 9) {
    return "red";
  } else if (score >= 7) {
    return "yellow";
  } else {
    return "green";
  }
}
