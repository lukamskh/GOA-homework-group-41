function grade (score1,score2, score3) {
  const average = (score1+ score2+ score3) / 3;
  return (average >= 90 && average <= 100) ? "A" : (average >= 80) ? "B" : (average >= 70) ? "C" : (average >= 60) ? "D" : "წადი ისწავლე და მერე მოდი"
}