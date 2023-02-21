// 1. Check if the 'Fast Attack' action is possible

export function canExecuteFastAttack(knightIsAwake) {
    if (knightIsAwake)  {
        return false
    } else {
        return true
    }
}

// 2. Check if the 'Spy' action is possible

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    if (knightIsAwake || archerIsAwake || prisonerIsAwake) {
        return true
    } else {
        return false
    }
}

// 3. Check if the 'Signal Prisoner' action is possible

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
    if (prisonerIsAwake && !archerIsAwake) {
        return true
    } else {
        return false
    }
}

// 4. Check if the 'Free Prisoner' action is possible

export function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) {
    if (petDogIsPresent && !archerIsAwake) {
        return true
    } else if (!petDogIsPresent && prisonerIsAwake && !archerIsAwake && !knightIsAwake) {
        return true
    } else {
        return false
    }
}