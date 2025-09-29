// ============================================
// 2️⃣ VOTING ELIGIBILITY CHECKER
// ============================================

console.log("=== Problem 2: Voting Eligibility Checker ===\n");

function checkVotingEligibility(age, isCitizen) {
  console.log(`Checking eligibility for: Age ${age}, Citizen: ${isCitizen}`);
  
  if (age >= 18 && isCitizen) {
    console.log("✅ You are eligible to vote!\n");
  } else if (age < 18 && isCitizen) {
    const yearsToWait = 18 - age;
    console.log(`❌ You are too young. Wait ${yearsToWait} more year(s) to vote.\n`);
  } else if (age >= 18 && !isCitizen) {
    console.log("❌ You must be a citizen to vote.\n");
  } else {
    console.log("❌ You must be 18+ AND a citizen to vote.\n");
  }
}

// Test cases
checkVotingEligibility(20, true);    // Eligible
checkVotingEligibility(16, true);    // Too young
checkVotingEligibility(25, false);   // Not a citizen
checkVotingEligibility(15, false);   // Both conditions fail

