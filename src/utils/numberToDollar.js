

export default function numberToDollar(num) {
  return (num).toLocaleString("en-US", {
    style: "currency", 
    currency: "USD", 
    minimumFractionDigits: 2
  })
}