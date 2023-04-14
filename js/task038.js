/*Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"*/

function bmi(weight, height) {
  const bmiCalc = weight / Math.pow(height, 2)
  if (bmiCalc <= 18.5) {
    return 'Underweight'
  } else if (bmiCalc <= 25.0) {
    return 'Normal'
  } else if (bmiCalc <= 30.0) {
    return 'Overweight'
  } else if (bmiCalc > 30) {
    return 'Obese'
  }
}

console.log(bmi(80, 1.8)) // 'Normal'
