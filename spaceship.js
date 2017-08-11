class Spaceship{
  constructor(name, crew, phasers, shields){
    this.name = name
    this.crew = crew
    this.crew.forEach((member)=>{
      member.currentShip = this
    })
    this.phasers = phasers
    this.shields = shields
    this.warpDrive = "disengaged"
    this.phasersCharge = "uncharged"
    this.cloaked = false
    this.docked = (this.crew.length > 0 ? false : true)
  }

}
