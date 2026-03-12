function organizeServices(principal, ...aditionals) {

    return {
    principal: principal,
    aditionals: aditionals
  }
}

console.log(
  organizeServices("Fox Eye", "Henna", "Design", "Limpeza")
)